'use strict';

const iLessF = (arr, i) => arr.slice(0, i).concat(arr.slice(i + 1))
const arrIDistF = (arr, el) => arr.length > 0 ? arr.map(e => el + e) : [el]

function perm (arr) {
  const output = []
  for (let i = 0; i < arr.length; i++) {
    const iless =  iLessF(arr, i)
    const permiless = perm(iless)
    const arridist = arrIDistF(permiless, arr[i])
    output.push(...arridist)
  }
  return output
}

const arr0 = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
const p012 = perm(arr0)
// Maximum call stack size exceeded
