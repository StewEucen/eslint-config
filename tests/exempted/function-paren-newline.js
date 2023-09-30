'use strict'

/* eslint-disable jsdoc/require-jsdoc */

function alphaFunc (alpha, beta, gamma) { // ✅ consistent of `function-paren-newline`
  return alpha + beta + gamma
}

function betaFunc (
  alpha, beta, gamma
) { // ✅ consistent of `function-paren-newline`
  return alpha + beta + gamma
}

module.exports = {
  alphaFunc,
  betaFunc,
}
