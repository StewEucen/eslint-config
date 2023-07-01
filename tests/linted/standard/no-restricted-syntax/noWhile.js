'use strict'

function noForOfFunc (array) {
  let total = 0
  let index = 0

  while (index < array.length) { // ❌ { selector: 'WhileStatement' } of `no-restricted-syntax`
    total += array[index]

    index += 1
  }

  return total
}

module.exports = {
  noForOfFunc,
}
