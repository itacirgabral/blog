'use strict'

const iLessGen = function* iLessGen (arr = []) {
  if (arr.constructor === Array) {
    for (let i = 0; i < arr.length; i++) {
      yield arr.slice(0, i).concat(arr.slice(i + 1))
    }
  } else {
    throw new TypeError("iLessGen should receive an Array")
  }
}
