'use strict'

class ClassMethodUseThis {
  /**
   * Constructor.
   */
  constructor () {
    this.alpha = 1
  }

  /**
   * Get value.
   *
   * @returns {number} - Value.
   */
  getValue () { // ❌ `class-methods-use-this`
    return 999
  }
}

module.exports = ClassMethodUseThis
