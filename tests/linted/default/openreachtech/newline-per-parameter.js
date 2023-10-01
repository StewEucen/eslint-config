'use strict'

/* eslint-disable jsdoc/require-jsdoc */

/*
 * Two parameters in one line.
 */

function alphaFunc (first, second) { // ❌ `openreachtech/newline-per-parameter`
  // noop
}

/*
 * Array parameter pattern.
 */

function betaFunc ([first, second]) { // ❌ `openreachtech/newline-per-parameter`
  // noop
}

/*
 * Object parameter pattern.
 */

function gammaFunc ({ first, second }) { // ❌ `openreachtech/newline-per-parameter`
  // noop
}

function deltaFunc ({
  first,
  second: { third, fourth }, // ❌ `openreachtech/newline-per-parameter`
}) {
  // noop
}

module.exports = {
  alphaFunc,
  betaFunc,
  gammaFunc,
  deltaFunc,
}
