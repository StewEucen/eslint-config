'use strict'
const alpha = 1 // ❌ directive/* of `padding-line-between-statements`

const beta = 2
{ // ❌ */block of `padding-line-between-statements`
  // eslint-disable-next-line no-console
  console.log(beta)
}

const array = [1, 3, 5, 7, 9]

function breakFunc () {
  // eslint-disable-next-line no-restricted-syntax
  let total = 0

  // eslint-disable-next-line no-restricted-syntax
  for (const value of array) {
    if (value > 5) {
      total += value

      break // ❌ */break of `padding-line-between-statements`
    }

    total *= value
  }

  return total
}

const delta = 4
class Delta { // ❌ class/* of `padding-line-between-statements`

}

function continueFunc () {
  // eslint-disable-next-line no-restricted-syntax
  let total = 0

  // eslint-disable-next-line no-restricted-syntax
  for (const value of array) {
    if (value > 5) {
      total += value

      // eslint-disable-next-line no-continue
      continue // ❌ */continue of `padding-line-between-statements`
    }

    total *= value
  }

  return total
}

const epsilon = 5
function epsilonFunc () { // ❌ function/* of `padding-line-between-statements`
  return epsilon
}

function zetaFunc (arg) {
  const times = arg * 2
  return times // ❌ return/* of `padding-line-between-statements`
}

function etaFunc (arg) {
  if (arg > 5) {
    return arg
  }
  try { // ❌ try/* of `padding-line-between-statements`
    const times = arg * 2

    return times
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error)
  }

  return 0
}

module.exports = {
  alpha,
  beta,
  breakFunc,
  continueFunc,
  delta,
  Delta,
  epsilonFunc,
  zetaFunc,
  etaFunc,
}
