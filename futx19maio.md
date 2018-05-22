# Minicurso de Web Worker e Promessas

O [evento](https://www.meetup.com/FutxicaiadaTecnologica/events/250792776/) foi sábado à tarde, haviam 20 inscrito mas foram 8, o que são bons números até.
A maioria não tinha bagagem com javascript, então por mais que a explicação convencesse, o impacto dessas tecnologias pareceu muito abstrato.

Desta vez deixei os pdf da apresentação dentro do site que usei de [playground](https://futxicaiadatec.github.io/minicurso_workerPromise/),
eles tinham nas mãos um pouco de código funcionando, outro tanto eu ia fazendo e dicutindo, em links ou no pdf havia mais exemplos.
De uma maneira geral eu procurei que eles encarassem um código cheio de callback no limite de não fazer mais sentido, complicado o suficiente
para ter que ler devagarinho e fazendo conta.

```javascript
/**
** Garçom
** @param {string} pedido - nome do prato desejado
** @callback - função chamada quando o pedido estiver pronto
**   @param {string} pedido - o nomedo pedido desejado
*/
function garçom (p, cb) {
  setTimeout(_ => {
    cb(p)
  }, Math.random() * 5000)
}
```

Exemplo simples
```javascript
garçom('pizza', console.log)
```

Exemplo em série longa
```javascript
garçom('entrada', e =>{
  console.log(e)
  garçom('bebida', b => {
    console.log(b)
	garçom('principal', p => {
	  console.log(p)
	  garçom('sobremesa', s => {
	    console.log(s)
		garçom('conta', console.log)
	  })
	})
  })
})
```

Reimplementando a função `garçom` para retornar promessa
```javascript
function garçomPromessa (pedido) {
  const pedido = new Promise((resolve, reject) => {
    setTimeout(_ => {
	  resolve(pedido)
	}, Math.random() * 5000)
  })
  return pedido
}

// ou, em uma linha:
const gp2 = p => new Promise(r => setTimeout(_ => r(p), Math.random() * 5000))
```

Com promessa aquele código em série pode ser reescrito como:
```javascript
const entrada = garçom('entrada')
entrada.then(console.log)

const bebida = entrada.then(_ => garçom('bebida'))
bebida.then(console.log)

const principal = bebida.then(_ => garçom('principal'))
principal.then(console.log)

const sobremesa = principal.then(_ => garçom('sobremesa'))
sobremesa.then(console.log)

const conta = sobremesa.then(_ => garçom('conta'))
conta.then(console.log)
```

O grande ganho é de legibilidade. Cada passagem está enganchada numa variável externa que pode ser usada para bifurcar execuções.

* * *

Observe o exemplo do uso de cache API pela [mdn](https://developer.mozilla.org/en-US/docs/Web/API/Cache):
```javascript
var CACHE_VERSION = 1;

// Shorthand identifier mapped to specific versioned cache.
var CURRENT_CACHES = {
  font: 'font-cache-v' + CACHE_VERSION
};

self.addEventListener('activate', function(event) {
  var expectedCacheNames = Object.values(CURRENT_CACHES);

  // Active worker won't be treated as activated until promise
  // resolves successfully.
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (!expectedCacheNames.includes(cacheName)) {
            console.log('Deleting out of date cache:', cacheName);
            
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

/**
** (...)
*/
```

Há uma tendência de [frameworkização](https://en.wikipedia.org/wiki/Overengineering) neste código. A variável `expectedCacheNames`, no final das contas,
é um vetor de nomes, a estrutura que a envolve serviria para depois ficar mais cômodo adicionar novos caches.

Mas gostaria de destacar o código Hadouken, essa pirâmide de promessas empilhadas. O trecho seria executado dentro de um service worker,
as variáveis e funções declaradas nele não poluem o escopo global. Podemos desacoplar com algo parecido com:
```javascript
const expectedCacheNames = [
  'font-cache-v99999',
  'font-cache-v99998',
  'font-cache-v99997'
]

const uselessCaches = caches.keys().then(
  cs => cs.filter(! expectedCacheNames.includes)
)

const deleteUselessCachess = uselessCaches(cs => Promise.all(
  cs.map(caches.delete)
))

self.addEventListener('activate', event => event.waitUntil(deleteUselessCachess))
```

Usamos variáveis como cabides para dispor as etapas na nossa frente. Ao se verstir acontece uma inversão de controle como nas callbacks,
a gente coloca primeiro as roupas mais íntimas, mas entende o processo melhor como se estivesse olhando de fora.

![cabide](hanger.png "cabide")






