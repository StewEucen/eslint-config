'use strict'

/* eslint-disable jsdoc/require-jsdoc */
/* eslint-disable no-implicit-coercion */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-unmodified-loop-condition */

const bool = true

const alpha = !!!bool // ❌ `no-extra-boolean-cast`

// eslint-disable-next-line no-negated-condition
const beta = !!bool // ❌ `no-extra-boolean-cast`
  ? 'yes'
  : 'no'

const gamma = Boolean(!!bool) // ❌ `no-extra-boolean-cast`

const delta = !!bool // ✅ `no-extra-boolean-cast`
const epsilon = Boolean(bool) // ✅ `no-extra-boolean-cast`
const zeta = bool
  ? !!alpha // ✅ `no-extra-boolean-cast`
  : !!beta // ✅ `no-extra-boolean-cast`

function etaFunc (it) {
  return !!it // ✅ `no-extra-boolean-cast`
}

if (!!bool) { // ❌ `no-extra-boolean-cast`
  // no-op
}

if (Boolean(bool)) { // ❌ `no-extra-boolean-cast`
  // no-op
}

while (!!bool) { // ❌ `no-extra-boolean-cast`
  // no-op
}

do {
  // no-op
} while (Boolean(bool)) // ❌ `no-extra-boolean-cast`

for (; !!bool;) { // ❌ `no-extra-boolean-cast`
  // no-op
}

// in logical operators

if (!!alpha || beta) { // ❌ enforceForLogicalOperands:true of `no-extra-boolean-cast`
  // no-op
}

while (!!alpha && beta) { // ❌ enforceForLogicalOperands:true of `no-extra-boolean-cast`
  // no-op
}

if (
  (!!alpha || beta) // ❌ enforceForLogicalOperands:true of `no-extra-boolean-cast`
  && gamma
) {
  // no-op
}

const theta = alpha && Boolean(bool) // ❌ `no-extra-boolean-cast`
  ? alpha
  : beta

const iota = Boolean(!!alpha || beta) // ❌ `no-extra-boolean-cast`

module.exports = {
  alpha,
  beta,
  gamma,
  delta,
  epsilon,
  zeta,
  etaFunc,
  theta,
  iota,
}
