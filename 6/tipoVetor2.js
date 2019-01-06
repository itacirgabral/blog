var mkArray = () => Object.assign(
  Object.create(
    Object.getPrototypeOf([])
  ),
  { 'length': 0 }
)

var a = mkArray()
a.push('first')
a.push('second')
a['2'] = 'third'

for(let i in a){
console.log(`a[${i}] = ${a[i]}`)
}
console.log(a.join(', '))

console.log(Object.getOwnPropertyDescriptors([]).length)
console.log(Object.getOwnPropertyDescriptors(a).length)