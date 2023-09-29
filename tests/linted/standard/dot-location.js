'use strict'

/* eslint-disable jsdoc/require-jsdoc */

const alpha = {
  method () {
    return 'I am method'
  },
}

function betaFunc () {
  return alpha.
    method()
}

module.exports = {
  betaFunc,
}
