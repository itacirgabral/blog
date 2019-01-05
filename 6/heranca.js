var a1 = [1, 1, 1]
a1.sum = function sum () {
  return this.reduce((a, b) => a + b, 0)
}
console.log(`a1.sum() = ${a1.sum()}`)

var tools4Arrays = {}
tools4Arrays.sum = function sum () {
  return this.reduce((a, b) => a + b, 0)
}
var a2 = [2,2,2]
a2.sum = tools4Arrays.sum
console.log(`a2.sum() = ${a2.sum()}`)

var a3 = [3, 3, 3]
Object.getPrototypeOf(a3).sum = function() {
  return this.reduce((a, b) => a + b, 0)
}
console.log(`a3.sum() = ${a3.sum()}`)

console.log(`now everyone has sum() = ${[4, 4, 4].sum()}`)