import zipProperty from './zipProperty'

function mkExtArr (toolsBag) {
  const megaPack = Object.defineProperty(
    zipProperty(Object.getPrototypeOf([]), toolsBag),
    'constructor',
    {
      'value': ExtArr
    }
  )
  
  const ExtArr = function ExtArr (...n) {
    return Object.setPrototypeOf(new Array(...n), megaPack)
  }
  ExtArr.prototype = megaPack
  ExtArr[Symbol.species] = ExtArr

  return ExtArr
}

export default mkExtArr