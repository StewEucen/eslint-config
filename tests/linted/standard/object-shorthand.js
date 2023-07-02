'use strict'

const extraMethodName = 'extraMethodName'
const extra = 1

const alpha = {
  first: function () { // ❌ `object-shorthand`
    return 1
  },
  second: function * () { // ❌ `object-shorthand`
    yield 2
  },
  [extraMethodName]: function () { // ❌ `object-shorthand`
    return 3
  },
  extra: extra, // ❌ `object-shorthand`
}

////////////////////////////////////////////////////////////////////////////////
// avoidQuotes: false

const beta = {
  'quoted-func' () { // ✅ avoidQuotes:false of `object-shorthand`
    return 3
  },
}

////////////////////////////////////////////////////////////////////////////////
// ignoreConstructors: false

const gamma = {
  ConstructorFunc: function () { // ❌ ignoreConstructors:false of `object-shorthand`
    // noop
  },
}

////////////////////////////////////////////////////////////////////////////////
// avoidExplicitReturnArrows: true

const delta = {
  // eslint-disable-next-line arrow-body-style
  firstFunc: (first, second) => { // ❌ avoidExplicitReturnArrows:true of `object-shorthand`
    return first + second
  },

  // eslint-disable-next-line arrow-body-style
  secondFunc: first => { // ❌ avoidExplicitReturnArrows:true of `object-shorthand`
    return first * 2
  },
}

module.exports = {
  alpha,
  beta,
  gamma,
  delta,
}
