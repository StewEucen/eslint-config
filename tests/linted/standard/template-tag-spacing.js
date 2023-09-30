'use strict'

/* eslint-disable jsdoc/require-jsdoc */

function alphaFunc (hashes, ...values) {
  return hashes
    .map((it, index) => it + emphasize(values[index]))
    .join('')

  function emphasize (word) {
    if (!word) {
      return ''
    }

    return `<strong>${word}</strong>`
  }
}

const beta = alphaFunc`Hello, ${'world'}!` // ❌ `template-tag-spacing`

module.exports = {
  beta,
}
