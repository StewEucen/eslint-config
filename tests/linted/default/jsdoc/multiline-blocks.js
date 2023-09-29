'use strict'

// ❌ noZeroLineText:true of `jsdoc/multiline-blocks`
/** Reported up here
 * because the rest is multiline
 */

// ✅ singleLineTags:[lends, type] of `jsdoc/multiline-blocks`
/** @type {string} */
const alpha = 'alpha'

// ✅ singleLineTags:[lends, type] of `jsdoc/multiline-blocks`
/** @lends AlphaLendsClass */

/**
 * Alpha class for @lends.
 */
class AlphaLendsClass {

}

// ❌ noSingleLineBlocks:true of `jsdoc/multiline-blocks`
/** @returns {string} - Alpha value. */
function alphaFunc () {
  return 'alpha'
}

module.exports = {
  alpha,
  alphaFunc,
}
