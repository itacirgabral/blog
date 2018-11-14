# Permutações & Geradores

Quando embaralhamos as cartas de um baralho estamos escolhendo uma das permutações possíveis. Achar as permutações de um conjunto é descobrir todas as formas que todos os elementos podem ser distribuídos.

![permutações de abcd](permutas)


Uma maneira intuitiva de elaborar isso é pelo método de contagem que aprendemos na escola para introduzir o fatorial. Dado um conjunto de tamanho n, você escolhe um destes elementos, restando n - 1,  mas poderia ser qualquer dos outros. O código a seguir exemplifica isso:
```javascript
const arr0 = ['a', 'b', 'c', 'd', 'e']

const iLess = (arr, i) => arr.slice(0, i).concat(arr.slice(i + 1))
const onesOf = arr => arr.map((e, i, l) => ({"i": e, "iLess": iLess(l, i)}))

console.log(`As ${arr.length} possibilidades de escolher 1 elementos são: ${JSON.stringify(onesOf(arr0), null, 4)}`)
```

O processo deve ser iterado até que tenha apenas um elemento pra ser escolhido, do conjunto n - 1 escolhe outro pelo mesmo método sucessivamente. Isto gera uma árvore com o primeiro nível com n elementos, depois cada um deste elemento tem seu subnível com n - 1:

```javascript
const P0 = {
  "iLess": arr0,
  "i": ''
}

function permNet (p) {
  if (p.iLess.length > 1) {
    p.iLess = onesOf(p.iLess)
    p.iLess.forEach(permNet)
  }
}

permNet(P0)

console.dir(P0)
```

