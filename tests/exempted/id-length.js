'use strict'

/* eslint-disable class-methods-use-this */
/* eslint-disable no-shadow */

const _ = 'under_score' // ✅ `id-length`
const $ = '$dollar' // ✅ `id-length`

/**
 * Lint sample for id-length rule.
 */
class IdLength {
  /**
   * Getter: handling.
   *
   * @returns {object} - An object.
   */
  get $ () { // ✅ `id-length`
    return {}
  }

  /**
   * Value of alpha method.
   *
   * @param {Array} array - Array of number.
   * @returns {object} - An object.
   */
  alphaMethod (array) {
    return array.map(
      (
        _, // ✅ `id-length`
        index
      ) => index
    )
  }
}

module.exports = {
  IdLength,
  _,
  $,
}
