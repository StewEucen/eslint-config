'use strict'

const expressionFunc = function () {
  return 'I am expression function'
}

const arrowFunc = () => 'I am arrow function'

function declarationFunc () {
  return 'I am declaration function'
}

module.exports = {
  expressionFunc,
  arrowFunc,
  declarationFunc,
}
