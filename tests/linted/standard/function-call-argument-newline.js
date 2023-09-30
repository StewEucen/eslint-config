'use strict'

/* eslint-disable jsdoc/require-jsdoc */

function functionCallArgumentNewline (first, second, third) {
  return first + second + third
}

const alpha = functionCallArgumentNewline(100, 200, // ❌ consistent of `function-call-argument-newline`
  300)

const beta = functionCallArgumentNewline(
  100,
  200, 300 // ❌ consistent of `function-call-argument-newline`
)

module.exports = {
  alpha,
  beta,
}
