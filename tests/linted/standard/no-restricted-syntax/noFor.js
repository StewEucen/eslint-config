'use strict'

function noForFunc () {
  let total = 0

  for (let index = 0; index < 10; index += 1) { // ❌ { selector: 'ForStatement' } of `no-restricted-syntax`
    total += index
  }

  return total
}

module.exports = {
  noForFunc,
}
