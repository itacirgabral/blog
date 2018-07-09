# Desafio
![bottle](bottle.png)

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












