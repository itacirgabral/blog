const bottle = (pivo => function bottle (a) {
    if (a) {
        pivo = a
    } else {
        return pivo
    }
})()
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
(async () => {
    let promise
    let bipMeAt
    let lastTime = 0
    let timeNow
    let delta
    let faltam = 5
    let respondeu = true
    let bipBack
    while (respondeu && faltam > 0) {
        timeNow = Date.now()
        delta = timeNow - lastTime
        
        if (delta < 50) {
            faltam -= 1
        } else {
            faltam = 5
        }
        
        ({promise, resolver: bipMeAt} = stripromise())

        try {
            ({bipMeAt: bipBack} = bottle())
        } catch {}            
        
        
        if (faltam === 0) {
            bottle({
                message: "Conseguiu!"
            })
        } else {
            bottle({
                message: "responda-me 5 vezes em menos de 50 milisegundos. Use o bipMeAt",
                faltam,
                delta,
                bipMeAt
            })
        }
        
        try {
            bipBack()
        } catch {}
        
        lastTime = timeNow
        
        respondeu = await promise.then(_ => true) 
    }        
})()
console.log("olhe na bottle")
