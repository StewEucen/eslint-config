'use strict'

/* eslint-disable jsdoc/require-jsdoc */

class MatchDescription {
  /* eslint-disable jsdoc/informative-docs */
  // ✅ matchDescription of `match-description`
  /**
   * Constructor.
   */
  constructor () {
    this.alpha = 1
    this.beta = 'string'
  }
  /* eslint-enable jsdoc/informative-docs */

  // ❌ matchDescription of `match-description` (does not start with capitalized letter)
  /**
   * get alpha value.
   *
   * @returns {number} - Alpha value.
   */
  firstMethod () {
    return this.alpha
  }

  // ❌ matchDescription of `match-description` (no period)
  /**
   * Get beta value
   *
   * @returns {string} - Beta value.
   */
  secondMethod () {
    return this.beta
  }
}

module.exports = MatchDescription
