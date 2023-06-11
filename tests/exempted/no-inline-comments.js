'use strict'

/** @type {string} */
const ALPHA = /** @type {*} */ (Symbol())

let BETA = null // Beta value
BETA = !!ALPHA

module.exports = {
  ALPHA,
  BETA,
}
