# Náufrago
![bottle](bottle.png)

Há um náufrago assíncrono neste oceano, ele só consegue ler e escrever mensagens através de uma garrafa. Ele não quer ser salvo, mas fica poluindo o mar com garrafas plásticas não biodegradáveis. 

Para o fazer parar é necessário responder 5 garrafas todas em menos de 50 milissegundos, assim ele acha que estão chegando perto.

## Garrafa
```javascript
const mkBottle = pivo => function bottle (a) {
    if (a) {
        pivo = a
    } else {
        return pivo
    }
}

const bottle = mkBottle()

bottle({
    message: "tem alguém ai?"
})
bottle()
bottle({
    message: "sim"
})
bottle()
```

## Alarme
```javascript
const stripromise = function stripromise () {
    let resolver
    let rejecter
    return {
        promise: new Promise((a, b) => {
            resolver = a
            rejecter = b
        }),
        resolver,
        rejecter
    }
}

let {promise: p, resolver: r, rejecter: j} = stripromise()
p.then(console.log).catch(console.error)

r('opa')
```

## Como saber se a garrafa foi respondida?
```javascript
let {promise, resolver} = stripromise()
bottle({
    message: "tem alguém ai",
    bipMeAt: resolver
})

promise.then(console.log)

bottle().bipMeAt("alô")
```

## Aperte F12

<script src="naufrago.js" defer></script>

Há uma variável globa `bottle` que é uma função, quando você executa sem argumentos ela retorna o que tem dentro da garrafa, com argumento salva dentro da garrafa.

O náufrago vai colocar na garrafa um objeto que possui um atributo `bipMeAt`, que ao executar faz com que ele escreva uma nova mensagem na garrafa. Esta função é o resolve de uma promessa, para ficar mais fácil existe a `stripromise` que vira uma nova Promise do avesso, você recebe um objeto contendo a promessa e suas funções de disparo destacadas.
