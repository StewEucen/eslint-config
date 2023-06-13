'use strict'

function*alphaFunc () { // ❌ before:true of `generator-star-spacing`
  yield 'first'
  yield 'second'
}

function * betaFunc () { // ❌ after:false of `generator-star-spacing`
  yield '1st'
  yield '2nd'
}

module.exports = {
  alphaFunc,
  betaFunc,
}
