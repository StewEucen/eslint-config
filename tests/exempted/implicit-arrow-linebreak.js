'use strict'

const alphaArrow = () => 'I am alpha arrow function' // ✅ below of `implicit-arrow-linebreak`

const betaArrow = () =>
  'I am beta arrow function' // ✅ beside of `implicit-arrow-linebreak`

const gammaArrow = () => {
  return 'I am gamma arrow function'
}

module.exports = {
  alphaArrow,
  betaArrow,
  gammaArrow,
}
