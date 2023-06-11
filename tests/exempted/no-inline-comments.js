'use strict'

/** @type {string} */
const ALPHA = /** @type {*} */ (Symbol('alpha'))

let BETA = null // Beta value
BETA = 'beta value'

module.exports = {
  ALPHA,
  BETA,
}
