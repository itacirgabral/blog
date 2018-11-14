'use strict'

const iLessF = (arr, i) => arr.slice(0, i).concat(arr.slice(i + 1))

function* permGen(arr) {
  if (arr.length > 1) {
    for (let i = 0; i < arr.length; i++) {
      const arri = arr[i]
      const iLess = iLessF(arr, i)
      for (const n of permGen(iLess)) {
        yield n.map(e => arri + e)
      }
    }
  } else {
    yield arr
  }
}

function* perm (arr, pre = '') {
  if (arr.length > 1) {
    for (let i = 0; i < arr.length; i++) {
      const arri = arr[i]
      const iLess = iLessF(arr, i)
      yield* perm(iLess, pre + arri)
    }
  } else {
    yield [pre + arr[0]]
  }
}
