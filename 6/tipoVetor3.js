var mkArray = () => Object.defineProperty(
  Object.create(
    Object.getPrototypeOf([])
  ),
  'length',
  {
    'value': 0,
    'writable': true,       // not default
    'configurable': false,  //default
    'enumerable': false     //default
  }
)
var a = mkArray()
console.log(Object.getOwnPropertyDescriptors([]).length)
console.log(Object.getOwnPropertyDescriptors(a).length)