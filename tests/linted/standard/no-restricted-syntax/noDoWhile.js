'use strict'

function noDoWhileFunc () {
  let index = 0

  do { // ❌ { selector: 'DoWhileStatement' } of `no-restricted-syntax`
    index += 1
  } while (index < 10)

  return index
}

module.exports = {
  noDoWhileFunc,
}
