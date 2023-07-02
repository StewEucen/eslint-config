'use strict'

// eslint-disable-next-line no-constant-condition
const alphaFunc = first => 1 // ❌ `no-confusing-arrow`
  ? first * 2
  : first - 3

// eslint-disable-next-line no-constant-condition, arrow-parens
const betaFunc = (first) => 1 // ❌ `no-confusing-arrow`
  ? first * 2
  : first - 3

// eslint-disable-next-line no-constant-condition
const gammaFunc = first => (1 // ✅ allowParens:true of `no-confusing-arrow`
  ? 2
  : 3
)

// eslint-disable-next-line no-constant-condition, arrow-parens
const deltaFunc = (first) => (1 // ✅ allowParens:true of `no-confusing-arrow`
  ? 2
  : 3
)

// eslint-disable-next-line no-constant-condition
const epsilonFunc = () => 1 // ❌ onlyOneSimpleParam:false of `no-confusing-arrow`
  ? 2
  : 3

// eslint-disable-next-line no-constant-condition
const zeroFunc = (first, second) => 1 // ❌ onlyOneSimpleParam:false of `no-confusing-arrow`
  ? 2
  : 3

const defaultValue = 3
// eslint-disable-next-line no-constant-condition
const etaFunc = (first = defaultValue) => 1 // ❌ onlyOneSimpleParam:false of `no-confusing-arrow`
  ? 2
  : 3

// eslint-disable-next-line no-constant-condition
const thetaFunc = ({ first }) => 1 // ❌ onlyOneSimpleParam:false of `no-confusing-arrow`
  ? 2
  : 3

// eslint-disable-next-line no-constant-condition
const iotaFunc = ([first]) => 1 // ❌ onlyOneSimpleParam:false of `no-confusing-arrow`
  ? 2
  : 3

// eslint-disable-next-line no-constant-condition
const kappaFunc = (...first) => 1 // ❌ onlyOneSimpleParam:false of `no-confusing-arrow`
  ? 2
  : 3

module.exports = {
  alphaFunc,
  betaFunc,
  gammaFunc,
  deltaFunc,
  epsilonFunc,
  zeroFunc,
  etaFunc,
  thetaFunc,
  iotaFunc,
  kappaFunc,
}
