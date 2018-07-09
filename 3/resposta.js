
function bottleResponse() {
  const lastBottle = bottle()
  if (lastBottle.faltam) {
    console.log(`faltam ${lastBottle.faltam}`)

    const {promise, resolver: bipMeAt} = stripromise()
    bottle({bipMeAt})

    promise.then(bottleResponse)
    lastBottle.bipMeAt()
  }
}

bottleResponse()
