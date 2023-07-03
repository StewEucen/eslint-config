'use strict'

const alpha = 0

// @ts-expect-error
if (alpha === NaN) { // ❌ `use-isnan`
  // ...
}

// @ts-expect-error
if (alpha !== NaN) { // ❌ `use-isnan`
  // ...
}

if (alpha === Number.NaN) { // ❌ `use-isnan`
  // ...
}

if (alpha !== Number.NaN) { // ❌ `use-isnan`
  // ...
}

// eslint-disable-next-line no-restricted-syntax
switch (alpha) {
  case NaN: // ❌ use-enforceForSwitchCase:true of `use-isnan`
    break
  // @ts-expect-error
  case 1:
    break
  default:
    break
}

// eslint-disable-next-line no-restricted-syntax
switch (NaN) { // ❌ use-enforceForSwitchCase:true of `use-isnan`
  case 1:
    break
  case 2:
    break
  default:
    break
}

// eslint-disable-next-line no-restricted-syntax
switch (alpha) {
  case Number.NaN: // ❌ use-enforceForSwitchCase:true of `use-isnan`
    break
  // @ts-expect-error
  case 1:
    break
  default:
    break
}

// eslint-disable-next-line no-restricted-syntax
switch (Number.NaN) { // ❌ use-enforceForSwitchCase:true of `use-isnan`
  case 1:
    break
  case 2:
    break
  default:
    break
}

const array = [1, 3, 5]

const beta = array.indexOf(NaN) // ❌ enforceForIndexOf:true of `use-isnan`
const gamma = array.lastIndexOf(NaN) // ❌ enforceForIndexOf:true of `use-isnan`

module.exports = {
  alpha,
  beta,
  gamma,
}
