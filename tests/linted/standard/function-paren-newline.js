'use strict'

function alphaFunc (alpha, beta, gamma
) { // ❌ consistent of `function-paren-newline`
  return alpha + beta + gamma
}

function betaFunc (
  alpha, beta, gamma) { // ❌ consistent of `function-paren-newline`
  return alpha + beta + gamma
}

module.exports = {
  alphaFunc,
  betaFunc,
}
