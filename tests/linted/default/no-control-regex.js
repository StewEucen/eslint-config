'use strict'

const alphaRegExp = /\x00/u
const betaRegExp = /\x1F/u
const gammaRegExp = /\u000C/u
const deltaRegExp = /\u{C}/u

const unicodeFlag = 'u'
const epsilonRegExp = new RegExp('\x0C', unicodeFlag) // raw U+000C character in the pattern
const zetaRegExp = new RegExp('\\x0C', unicodeFlag) // \x0C pattern

module.exports = {
  alphaRegExp,
  betaRegExp,
  gammaRegExp,
  deltaRegExp,
  epsilonRegExp,
  zetaRegExp,
}
