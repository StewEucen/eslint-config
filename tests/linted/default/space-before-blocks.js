'use strict'

/* eslint-disable jsdoc/require-jsdoc */

////////////////////////////////////////////////////////////////////////////////
// functions: always

function alphaFunc (){ // ❌ functions:always of `space-before-blocks`
  // noop
}

////////////////////////////////////////////////////////////////////////////////
// keywords: always

const extra = true

function betaFunc () {
  // noop
}

if (extra){ // ❌ keywords:always of `space-before-blocks`
  betaFunc()
}

// eslint-disable-next-line no-restricted-syntax
for (let step = 0; step < 10; step += 1){ // ❌ keywords:always of `space-before-blocks`
  betaFunc()
}

{
  // eslint-disable-next-line no-restricted-syntax
  let index = 0
  // eslint-disable-next-line no-restricted-syntax
  while (index < 10){ // ❌ keywords:always of `space-before-blocks`
    betaFunc()

    index += 1
  }

  // eslint-disable-next-line keyword-spacing, no-restricted-syntax
  do{ // ✅ keywords:always of `space-before-blocks`
    betaFunc()

    index += 1
  } while (index < 10)
}

// eslint-disable-next-line keyword-spacing
try{ // ✅ keywords:always of `space-before-blocks`
  betaFunc()
} catch (error){ // ❌ keywords:always of `space-before-blocks`
  // noop
}

////////////////////////////////////////////////////////////////////////////////
// classes: always

class Gamma{ // ❌ classes:always of `space-before-blocks`
  // noop
}

module.exports = {
  alphaFunc,
  betaFunc,
  Gamma,
}
