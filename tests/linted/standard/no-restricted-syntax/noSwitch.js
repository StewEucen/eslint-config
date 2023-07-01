'use strict'

function noForOfFunc (condition) {
  switch (condition) { // ❌ { selector: 'SwitchStatement' } of `no-restricted-syntax`
  case 1:
    return 'one'
  case 2:
    return 'two'
  default:
    return 'unknown'
  }
}

module.exports = {
  noForOfFunc,
}
