'use strict';

const iLess = (arr, i) => arr.slice(0, i).concat(arr.slice(i + 1))
const arrIDist = (arr, el) => arr.length > 0 ? arr.map(e => el + e) : [el]

const perm = arr => arr.reduce(
  (a, b, i, lst) => a.concat(
    ...arrIDist(perm(iLess(lst, i)), b)
), [])

const arr0 = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

const p012 = perm(arr0)
