'use strict'
const alpha = 1 // ❌ directive/* of `padding-line-between-statements`

const beta = 2
{ // ❌ */block of `padding-line-between-statements`
  // eslint-disable-next-line no-console
  console.log(beta)
}

const array = [1, 3, 5, 7, 9]

let total = 0
for (const value of array) {
  if (value > 5) {
    total += value
    break // ❌ */break of `padding-line-between-statements`
  }

  total *= value
}

const delta = 4
class Delta { // ❌ class/* of `padding-line-between-statements`

}

let secondTotal = 0
for (const value of array) {
  if (value > 5) {
    secondTotal += value
    // eslint-disable-next-line no-continue
    continue // ❌ */continue of `padding-line-between-statements`
  }

  secondTotal *= value
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
  delta,
  Delta,
  epsilonFunc,
  zetaFunc,
  etaFunc,

  total,
  secondTotal,
}
