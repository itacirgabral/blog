let promise

function bottleResponse() {
  const lastBottle = bottle()
  let resolver

  if (lastBottle.faltam) {
    console.log(`faltam ${lastBottle.faltam}`)
    
    ;({promise, resolver} = stripromise())
    
    bottle({
      bipMeAt: resolver
    })

    promise.then(bottleResponse)

    lastBottle.bipMeAt()
  }
}

bottleResponse()
