'use strict'

/** @type {string} */
const ALPHA = /** @type {*} */ (Symbol('alpha'))

/* eslint-disable-next-line no-restricted-syntax */
let BETA = null // Beta value
BETA = 'beta value'

module.exports = {
  ALPHA,
  BETA,
}
