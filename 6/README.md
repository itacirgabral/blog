# Protótipos intermediários

## Introdução
Javascript é uma linguagem com herança prototípica, os atributos não encontrados
de um objeto são procurados no objeto vinculado como protótipo do primeiro. O
segundo objeto pode ter um terceiro vinculado pelo próprio protótipo e assim
sucessivamente. É como se fosse uma lista encadeada.

```javascript
// corrente.js
var a = []
var pa = Object.getPrototypeOf(a)
Object.getOwnPropertyNames(pa).join('\n')
```

O protótipo do objeto `Object` é o oceano onde todas as cadeias de protótipos
deságuam. E o protótipo deste objeto é `null`. 

```javascript
// oceano.js
var a = []
var pa = Object.getPrototypeOf(a)
var ppa =  Object.getPrototypeOf(pa)

var o = {}
var po = Object.getPrototypeOf(o)

ppa === po
```

Vários objetos diferentes podem possuir o mesmo protótipo, o código nele presente
passa a poder ser acessado por todos esses filhos. É um mecanismo similar às
classes em orientação a objeto, porém com protótipos a herança acontece por
objetos manuseáveis durante a execução do programa.

## MDN
Abaixo vários links para documentação relacionada:
- [create](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create)
- [PrototypeOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf)
- [assign](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
- [PropertyDescriptors](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptors)
- [defineProperties](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties)
- [constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor)

## Tipo vetor

`Array` é um dos objetos especializados do javascript, seu protótipo aponta para
o protótipo base do `Object` e possui diversos métodos para lidar com seus
elementos, como `reduce` ou `sort`. Mesmo assim é possível adicionar atributos
não numéricos a um objeto do tipo array:

```javascript
var a = []
a.a = a
a.b = 'b'
a[-1] = 'negativo'
a.sum = function() {
  return this.reduce((a, b) => a + b, 0)
}
// a['2'] = 'third'
a.push('first')
a.push('second')


for(let i in a){
  console.log(`a[${i}] = ${a[i]}`)
}

console.log(a.join(', '))
```

O que acontece ao descomentar a linha `a["2"]`? E se mover ela para depois dos
`push`es ?

