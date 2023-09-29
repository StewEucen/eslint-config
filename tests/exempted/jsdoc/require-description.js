'use strict'

/* eslint-disable jsdoc/require-jsdoc */

class RequireDescription {
  // eslint-disable-next-line jsdoc/no-blank-blocks
  /** */ // ✅ `jsdoc/require-description`
  constructor () {
    this.third = true
  }

  // eslint-disable-next-line jsdoc/no-blank-blocks, jsdoc/require-param
  /** */ // ✅ `jsdoc/require-description`
  method (params) {
    const extended = {
      ...params,
      third: this.third,
    }

    return [
      extended,
    ]
  }
}

// eslint-disable-next-line jsdoc/no-blank-blocks
/** */ // ✅ `jsdoc/require-description`
function alphaMethod () {
  // noop
}

module.exports = {
  RequireDescription,
  alphaMethod,
}
