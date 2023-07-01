'use strict'

// eslint-disable-next-line func-names
const alpha = function () { // ❌ inside of `wrap-iife`
  return 1
}()

// eslint-disable-next-line func-names
const beta = (function () { // ❌ inside of `wrap-iife`
  return 2
}())

// eslint-disable-next-line func-names
const gamma = (function () { // ✅ inside of `wrap-iife`
  return 3
})()

function extraFunc () {
  // noop
}

const targetThis = {}

// eslint-disable-next-line func-names
const zeta = function () { // ❌ inside of `wrap-iife`
  extraFunc()
}
  .call(targetThis)

// eslint-disable-next-line func-names
const eta = (function () { // ❌ inside of `wrap-iife`
  extraFunc()
}
  .call(targetThis))

module.exports = {
  alpha,
  beta,
  gamma,
  zeta,
  eta,
}
