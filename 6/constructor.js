var protoOfArray = Object.getPrototypeOf([])

var tools4Arrays = Object.defineProperty(
  Object.create(protoOfArray),
  'sum',
  {
    'value': function sum () {
        return this.reduce((a, b) => a + b, 0)
      }
  }
)
tools4Arrays = Object.defineProperty(
  tools4Arrays,
  'constructor',
  {
    'value': ExtArr
  }
)

function ExtArr (n) {
  return Object.setPrototypeOf(new Array(n), tools4Arrays)
}
Object.setPrototypeOf(ExtArr, tools4Arrays)
ExtArr[Symbol.species] = ExtArr


var a3 = ExtArr(3)
a3[0] = 3
a3[1] = 3
a3[2] = 3

console.log(`a3.filter has sum() = ${a3.filter(() => true).sum()}`)
console.log(`a3.fmap has sum() = ${a3.map(x => x).sum()}`)