var protoOfArray = Object.getPrototypeOf([])

var tools4Arrays = Object.defineProperty(
  Object.create(protoOfArray),
  'sum',
  {
    'value': function sum () {
        return this.reduce((a, b) => a + b, 0)
      },
    'writable': false,
    'configurable': false,
    'enumerable': true
  }
)

var a3 = Object.setPrototypeOf(new Array(0), tools4Arrays)
a3[0] = 3
a3[1] = 3
a3[2] = 3

console.log(`a3.sum() = ${a3.sum()}`)
console.error(`just a3 has sum() = ${[4, 4, 4].sum()}`)