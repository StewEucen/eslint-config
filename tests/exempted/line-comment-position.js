'use strict'

// Alpha value ✅ exempted `line-comment-position`
const ALPHA = 1

/* eslint-disable-next-line no-restricted-syntax */
let BETA = null // Beta value ✅ exempted `line-comment-position`
BETA = ALPHA + ALPHA

module.exports = {
  ALPHA,
  BETA,
}
