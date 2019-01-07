import zipProperty from './zipProperty.mjs'

function mkExtArr (toolsBag) {
  const tools4Arrays = Object.defineProperty(
    zipProperty(Object.getPrototypeOf([]), toolsBag),
    'constructor',
    {
      'value': ExtArr
    }
  )
  
  function ExtArr (...n) {
    return Object.setPrototypeOf(new Array(...n), tools4Arrays)
  }
  ExtArr.prototype = tools4Arrays
  ExtArr[Symbol.species] = ExtArr

  return ExtArr
}

export default mkExtArr