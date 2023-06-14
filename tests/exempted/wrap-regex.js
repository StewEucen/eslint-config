'use strict'

function wrapRegexFunc (it) {
  return /alpha/u.test(it) // ✅ exempted `wrap-regex`
}

module.exports = {
  wrapRegexFunc,
}
