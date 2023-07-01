'use strict'

function alphaFunc (arg) { // ❌ max:2 of `complexity`
  if (arg === 0) {
    return 'zero' // first path
  } else if (arg === 1) {
    return 'one' // second path
  } else if (arg === 2) {
    return 'two' // third path
  } else if (arg === 3) {
    return 'three' // fourth path
  } else if (arg === 4) {
    return 'four' // fifth path
  } else if (arg === 5) {
    return 'five' // sixth path
  } else if (arg === 6) {
    return 'six' // seventh path
  } else if (arg === 7) {
    return 'seven' // eighth path
  } else if (arg === 8) {
    return 'eight' // ninth path
  } else if (arg === 9) {
    return 'nine' // tenth path
  } else if (arg === 10) {
    return 'ten' // eleventh path
  } else if (arg === 11) {
    return 'eleven' // twelfth path
  } else if (arg === 12) {
    return 'twelve' // thirteenth path
  } else if (arg === 13) {
    return 'thirteen' // fourteenth path
  } else if (arg === 14) {
    return 'fourteen' // fifteenth path
  } else { // eslint-disable-line no-else-return
    return 'unknown' // sixteenth path
  }
}

function betaFunc ({ // ❌ max:15 of `complexity`
  first,
  second,
  third,
  fourth,
  fifth,
  sixth,
  seventh,
  eighth,
  ninth,
  tenth,
  eleventh,
  twelfth,
  thirteenth,
  fourteenth,
  fifteenth,
}) {
  first ||= 1 // eslint-disable-line no-param-reassign
  second &&= 1 // eslint-disable-line no-param-reassign
  third ??= 1 // eslint-disable-line no-param-reassign
  fourth ??= 1 // eslint-disable-line no-param-reassign
  fifth ??= 1 // eslint-disable-line no-param-reassign
  sixth ??= 1 // eslint-disable-line no-param-reassign
  seventh ??= 1 // eslint-disable-line no-param-reassign
  eighth ??= 1 // eslint-disable-line no-param-reassign
  ninth ??= 1 // eslint-disable-line no-param-reassign
  tenth ??= 1 // eslint-disable-line no-param-reassign
  eleventh ??= 1 // eslint-disable-line no-param-reassign
  twelfth ??= 1 // eslint-disable-line no-param-reassign
  thirteenth ??= 1 // eslint-disable-line no-param-reassign
  fourteenth ??= 1 // eslint-disable-line no-param-reassign
  fifteenth ??= 1 // eslint-disable-line no-param-reassign
}

module.exports = {
  alphaFunc,
  betaFunc,
}
