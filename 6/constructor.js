var protoOfArray = Object.getPrototypeOf([])

var tools4Arrays = Object.defineProperty(
  Object.create(protoOfArray),
  'sum',
  {
    'value': function sum () {
        return this.reduce((a, b) => a + b, 0)
      },
      'enumerable': true
  }
)
tools4Arrays = Object.defineProperty(
  tools4Arrays,
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


var a3 = ExtArr(3, 3, 3)

console.log(`Array.isArray(a3) = ${Array.isArray(a3)}`)
console.log(`a3 instanceof Array = ${a3 instanceof Array}`)
console.log(`a3 instanceof ExtArr = ${a3 instanceof ExtArr}`)

console.log(`a3.filter has sum() = ${a3.filter(() => true).sum()}`)
console.log(`a3.map has sum() = ${a3.map(x => x).sum()}`)