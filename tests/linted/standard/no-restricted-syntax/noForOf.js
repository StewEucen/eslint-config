'use strict'

function noForOfFunc (array) {
  let total = 0

  for (const it of array) { // ❌ { selector: 'ForInStatement' } of `no-restricted-syntax`
    total += it
  }

  return total
}

module.exports = {
  noForOfFunc,
}
