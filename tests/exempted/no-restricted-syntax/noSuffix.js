'use strict'

/* eslint-disable jsdoc/require-jsdoc */

class NoSuffix {
  constructor () {
    this.value = null
  }

  getItem () { // ✅ { selector: 'Identifier[name="(?<![gs]et)Item"]' } of `no-restricted-syntax`
    return this.value
  }

  setItem (value) { // ✅ { selector: 'Identifier[name="(?<![gs]et)Item"]' } of `no-restricted-syntax`
    this.value = value

    return this
  }
}

module.exports = NoSuffix
