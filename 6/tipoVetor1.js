var a = []
a.a = a
a.b = 'b'
a[-1] = 'negativo'

// a['2'] = 'third'
a.push('first')
a.push('second')


for(let i in a){
  console.log(`a[${i}] = ${a[i]}`)
}

console.log(a.join(', '))