'use strict'

/* eslint-disable jsdoc/require-jsdoc */

function alphaFunc (arg) { // ❌ max:8 of `complexity`
  if (arg === 0) {
    return 'zero' // first path
  } else if (arg === 1) { // eslint-disable-line no-restricted-syntax
    return 'one' // second path
  } else if (arg === 2) { // eslint-disable-line no-restricted-syntax
    return 'two' // third path
  } else if (arg === 3) { // eslint-disable-line no-restricted-syntax
    return 'three' // fourth path
  } else if (arg === 4) { // eslint-disable-line no-restricted-syntax
    return 'four' // fifth path
  } else if (arg === 5) { // eslint-disable-line no-restricted-syntax
    return 'five' // sixth path
  } else if (arg === 6) { // eslint-disable-line no-restricted-syntax
    return 'six' // seventh path
  } else if (arg === 7) { // eslint-disable-line no-restricted-syntax
    return 'seven' // eighth path
  } else { // eslint-disable-line no-else-return
    return 'unknown' // ninth path
  }
}

function betaFunc ({ // ❌ max:8 of `complexity`
  first,
  second,
  third,
  fourth,
  fifth,
  sixth,
  seventh,
  eighth,
}) {
  first ||= 1 // eslint-disable-line no-param-reassign
  second &&= 1 // eslint-disable-line no-param-reassign
  third ??= 1 // eslint-disable-line no-param-reassign
  fourth ??= 1 // eslint-disable-line no-param-reassign
  fifth ??= 1 // eslint-disable-line no-param-reassign
  sixth ??= 1 // eslint-disable-line no-param-reassign
  seventh ??= 1 // eslint-disable-line no-param-reassign
  eighth ??= 1 // eslint-disable-line no-param-reassign
}

module.exports = {
  alphaFunc,
  betaFunc,
}
