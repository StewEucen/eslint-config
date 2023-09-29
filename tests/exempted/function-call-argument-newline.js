'use strict'

/* eslint-disable jsdoc/require-jsdoc */

function functionCallArgumentNewline (first, second, third) {
  return first + second + third
}

const alpha = functionCallArgumentNewline(100, 200, 300) // ✅ consistent of `function-call-argument-newline`

const beta = functionCallArgumentNewline( // ✅ consistent of `function-call-argument-newline`
  100, 200, 300
)

const gamma = functionCallArgumentNewline( // ✅ consistent of `function-call-argument-newline`
  100,
  200,
  300
)

module.exports = {
  alpha,
  beta,
  gamma,
}
