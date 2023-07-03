'use strict'

function alphaFunc () {
  return 'alpha'
}

function betaFunc () {
  return 'beta'
}

{
  // eslint-disable-next-line semi
  alphaFunc(); // ❌ first of `semi-style`

  // eslint-disable-next-line no-restricted-syntax
  [1, 2, 3].forEach(it => {}) // ❌ first of `semi-style`
}

// eslint-disable-next-line no-restricted-syntax
for (
  // eslint-disable-next-line no-restricted-syntax
  let index = 0
  ; index < 10 // ❌ first of `semi-style`
  ; index += 1 // ❌ first of `semi-style`
) {
  betaFunc()
}

class Gamma {
  static {
    // eslint-disable-next-line semi
    alphaFunc(); // ❌ first of `semi-style`
    betaFunc()
  }

  static method () {
    alphaFunc()

    // eslint-disable-next-line no-restricted-syntax
    ; [1, 3, 5].forEach(it => { // ✅ first of `semi-style`
      betaFunc()
    })
  }
}

module.exports = {
  Gamma,
}
