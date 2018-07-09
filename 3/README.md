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
Há uma variável global `bottle` que é uma função, quando você executa sem argumentos ela retorna o que tem dentro da garrafa. Com argumento, salva ele dentro da garrafa.

O náufrago vai colocar na garrafa um objeto que possui um atributo `bipMeAt`, que ao executar faz com que ele escreva uma nova mensagem na garrafa. Esta função é o resolve de uma promessa, para ficar mais fácil existe a `stripromise` que vira uma nova Promise do avesso, você recebe um objeto contendo a promessa e suas funções de disparo destacadas.

## Condição de disputa
Por que o código a seguir não resolve?
```javascript
bottle().bipMeAt()
bottle().bipMeAt()
bottle().bipMeAt()
bottle().bipMeAt()
bottle().bipMeAt()
bottle().bipMeAt()
bottle().bipMeAt()
bottle().bipMeAt()
```
Porque ele executa várias vezes a mesma função `bipMeAt`. São a mesma mensagem na garrafa porque não acabou a fila de tarefas pra começar a fila de [promissas](https://abc.danch.me/microtasks-macrotasks-more-on-the-event-loop-881557d7af6f), que é quando o naufrago escreve novas mensagens. Você executou o `resolve` da promessa mas ela não chaveia imediatamente.

Há várias maneiras de contornar isso. Uma delas é colocar cada `bottle().bipMeAt` depois de `setTimeout`
```javascript
setTimeout(() => {
  bottle().bipMeAt()
  setTimeout(() => {
    bottle().bipMeAt()
    setTimeout(() => {
      bottle().bipMeAt()
      setTimeout(() => {
        bottle().bipMeAt()
        setTimeout(() => {
          bottle().bipMeAt()
          setTimeout(() => {
            bottle().bipMeAt()
            }, 0)
          }, 0)
        }, 0)
      }, 0)
    }, 0)
  }, 0)
```
Assim você está passando a bola pra fila das promessas. Contudo neste código você não espera pelo náufrago chamar de volta pelo `bipMeAt` da garrafa, algo que ele faz quando termina de responder uma mensagem.
```javascript
let bipAfter = bottle().bipMeAt

bottle({
  bipMeAt: () => {
    console.log("wilson, é você?")
  }
})

bipAfter()
```

Se ele demorasse pra responder, o `setTimeout` pra `0` não iria funcionar. Pior, temporarimamente pode ter alguma função bomba no `bipMeAt`.

No arquivo [resposta](resposta.js) tem uma solução que usa *promessas recursivas*, seria uma forma contraída desda solução:
```javascript
Promise.resolve().then(() => {
  const {promise, resolver: bipMeAt} = stripromise()
  const bipAfter = bottle().bipMeAt
  bottle({bipMeAt})
  bipAfter()
  return promise
}).then(() => {
  const {promise, resolver: bipMeAt} = stripromise()
  const bipAfter = bottle().bipMeAt
  bottle({bipMeAt})
  bipAfter()
  return promise
}).then(() => {
  const {promise, resolver: bipMeAt} = stripromise()
  const bipAfter = bottle().bipMeAt
  bottle({bipMeAt})
  bipAfter()
  return promise
}).then(() => {
  const {promise, resolver: bipMeAt} = stripromise()
  const bipAfter = bottle().bipMeAt
  bottle({bipMeAt})
  bipAfter()
  return promise
}).then(() => {
  const {promise, resolver: bipMeAt} = stripromise()
  const bipAfter = bottle().bipMeAt
  bottle({bipMeAt})
  bipAfter()
  return promise
}).then(() => {
  const {promise, resolver: bipMeAt} = stripromise()
  const bipAfter = bottle().bipMeAt
  bottle({bipMeAt})
  bipAfter()
  return promise
})
```
