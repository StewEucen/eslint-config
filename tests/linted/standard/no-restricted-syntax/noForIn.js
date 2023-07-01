'use strict'

function noForInFunc (array) {
  let total = 0

  for (const index in array) { // ❌ { selector: 'ForInStatement' } of `no-restricted-syntax`
    total += array[index]
  }

  return total
}

module.exports = {
  noForInFunc,
}
