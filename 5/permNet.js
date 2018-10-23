'use strict';
const iLess = (arr, i) => arr.slice(0, i).concat(arr.slice(i + 1))

const arr0 = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

const arrILess = arr => arr.map(
  (e, i, l) => ({
    "i": e,
    "iless": iLess(l, i)
  })
)
const P0 = {
  "iless": arr0,
  "i": ''
}

function permNet (p) {
  if (p.iless.length > 1) {
    p.iless = arrILess(p.iless)
    p.iless.forEach(permNet)
  }
}

permNet(P0)
