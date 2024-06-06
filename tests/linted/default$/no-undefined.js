'use strict'

/* eslint-disable jsdoc/require-jsdoc */
/* eslint-disable no-shadow */
/* eslint-disable no-shadow-restricted-names */

const alpha = undefined // ❌`no-undefined`

{
  // eslint-disable-next-line no-unused-vars
  const undefined = 'string value' // ❌`no-undefined`
}

if (alpha === undefined) { // ❌`no-undefined`
  // noop
}

function betaFunc (undefined) { // ❌`no-undefined`
  // noop
}

function gammaFunc (first) {
  return first
}

// eslint-disable-next-line jest/require-hook
gammaFunc(undefined) // ❌`no-undefined`

module.exports = {
  alpha,
  betaFunc,
  gammaFunc,
}
