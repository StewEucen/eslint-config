'use strict'

class TagLines {
  /**
   * There is empty line between `param` and `returns` (8: Expected no lines between tags).
   *
   * @param {Array<number>} params - Required params to create response.
   *
   * @returns {{
   *   params: Array<number>,
   * }} - The alpha structure.
   */
  static alphaMethod (params) {
    return {
      params,
    }
  }

  /**
   * There is no empty line after description (20: Expected 1 lines after block description).
   * @param {Array<number>} params - Required params to create response.
   * @returns {{
   *   params: Array<number>,
   * }} - The alpha structure.
   */
  static betaMethod (params) {
    return {
      params,
    }
  }
}

module.exports = TagLines
