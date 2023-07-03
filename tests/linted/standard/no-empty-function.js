'use strict'

function alphaFunc () {} // ❌ `no-empty-function`

const betaFunc = function () {} // ❌ `no-empty-function`
const gammaFunc = () => {} // ✅ `no-empty-function`

function * deltaFunc () {} // ❌ `no-empty-function`

const epsilonFunc = function * () {} // ❌ `no-empty-function`

const zeta = {
  // eslint-disable-next-line object-shorthand
  firstFunc: function () {}, // ❌ `no-empty-function`
  // eslint-disable-next-line object-shorthand
  secondFunc: function * () {}, // ❌ `no-empty-function`
  // eslint-disable-next-line object-shorthand
  thirdFunc: () => {}, // ✅ `no-empty-function`
  fourthFunc () {}, // ❌ `no-empty-function`
  * fifthFunc () {}, // ❌ `no-empty-function`

  // @ts-expect-error
  // eslint-disable-next-line getter-return
  get value () {}, // ❌ `no-empty-function`
  set value (value) {}, // ❌ `no-empty-function`
}

class Eta {
  // eslint-disable-next-line no-useless-constructor
  constructor () {} // ❌ `no-empty-function`

  // eslint-disable-next-line class-methods-use-this
  firstFunc () {} // ❌ `no-empty-function`

  // eslint-disable-next-line class-methods-use-this
  * secondFunc () {} // ❌ `no-empty-function`

  // @ts-expect-error
  // eslint-disable-next-line class-methods-use-this, getter-return
  get value () {} // ❌ `no-empty-function`

  // eslint-disable-next-line class-methods-use-this
  set value (value) {} // ❌ `no-empty-function`

  static fourthFunc () {} // ❌ `no-empty-function`

  static * fifthFunc () {} // ❌ `no-empty-function`

  // @ts-expect-error
  // eslint-disable-next-line getter-return
  static get value () {} // ❌ `no-empty-function`

  static set value (value) {} // ❌ `no-empty-function`
}

module.exports = {
  alphaFunc,
  betaFunc,
  gammaFunc,
  deltaFunc,
  epsilonFunc,
  zeta,
  Eta,
}
