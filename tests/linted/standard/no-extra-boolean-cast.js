'use strict'

/* eslint-disable jsdoc/require-jsdoc */

const bool = true

// eslint-disable-next-line no-implicit-coercion
const alpha = !!!bool // ❌ `no-extra-boolean-cast`

// eslint-disable-next-line no-implicit-coercion, no-negated-condition
const beta = !!bool // ❌ `no-extra-boolean-cast`
  ? 'yes'
  : 'no'

// eslint-disable-next-line no-implicit-coercion
const gamma = Boolean(!!bool) // ❌ `no-extra-boolean-cast`

// eslint-disable-next-line no-implicit-coercion
const delta = !!bool // ✅ `no-extra-boolean-cast`
const epsilon = Boolean(bool) // ✅ `no-extra-boolean-cast`
const zeta = bool
  // eslint-disable-next-line no-implicit-coercion
  ? !!alpha // ✅ `no-extra-boolean-cast`
  // eslint-disable-next-line no-implicit-coercion
  : !!beta // ✅ `no-extra-boolean-cast`

function etaFunc (it) {
  // eslint-disable-next-line no-implicit-coercion
  return !!it // ✅ `no-extra-boolean-cast`
}

// eslint-disable-next-line no-implicit-coercion
if (!!bool) { // ❌ `no-extra-boolean-cast`
  // no-op
}

if (Boolean(bool)) { // ❌ `no-extra-boolean-cast`
  // no-op
}

// eslint-disable-next-line no-implicit-coercion, no-unmodified-loop-condition, no-restricted-syntax
while (!!bool) { // ❌ `no-extra-boolean-cast`
  // no-op
}

// eslint-disable-next-line no-restricted-syntax
do {
  // no-op
} while (Boolean(bool)) // ❌ `no-extra-boolean-cast`

// eslint-disable-next-line no-implicit-coercion, no-unmodified-loop-condition, no-restricted-syntax
for (; !!bool;) { // ❌ `no-extra-boolean-cast`
  // no-op
}

// in logical operators

// eslint-disable-next-line no-implicit-coercion
if (!!alpha || beta) { // ❌ enforceForLogicalOperands:true of `no-extra-boolean-cast`
  // no-op
}

// eslint-disable-next-line no-implicit-coercion, no-unmodified-loop-condition, no-restricted-syntax
while (!!alpha && beta) { // ❌ enforceForLogicalOperands:true of `no-extra-boolean-cast`
  // no-op
}

if (
  // eslint-disable-next-line no-implicit-coercion
  (!!alpha || beta) // ❌ enforceForLogicalOperands:true of `no-extra-boolean-cast`
  && gamma
) {
  // no-op
}

const theta = alpha && Boolean(bool) // ❌ `no-extra-boolean-cast`
  ? alpha
  : beta

// eslint-disable-next-line no-implicit-coercion
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
