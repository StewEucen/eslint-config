'use strict'

function noTernaryFunc (value) {
  return value === 1 // ✅ `no-ternary`
    ? 'one'
    : 'not one'
}

module.exports = {
  noTernaryFunc,
}
