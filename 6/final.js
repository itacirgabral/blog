function zipProperty (proto, toolsBag) {
  return Object.entries(toolsBag).reduce((a, [key, value]) => Object.defineProperty(
    a,
    key,
    { value,'enumerable': true }
  ), proto)
}

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
var StatisticalArray = mkExtArr({
  'isNumeric': function isNumeric () { 
    return this.every(Number.isFinite)
  },
  'sum': function sum () {
    return this.isNumeric() ? this.reduce((a, b) => a + b, 0) : new TypeError('should be stric numeric')
  },
  'average': function average () {
    return this.isNumeric() ? this.sum() / this.length : new TypeError('should be stric numeric')
  }
})
