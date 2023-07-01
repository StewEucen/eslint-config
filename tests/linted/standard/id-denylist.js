'use strict'

function extraFunc () {
  const data = {} // ❌ ['data'] of `id-denylist`
  const list = [] // ❌ ['list'] of `id-denylist`
  const [item] = [1, 3, 5] // ❌ ['item'] of `id-denylist`

  return [
    data, // ❌ ['data'] of `id-denylist`
    list, // ❌ ['list'] of `id-denylist`
    item, // ❌ ['item'] of `id-denylist`
  ]
}

function callback () { // ❌ ['callback'] of `id-denylist`
  // noop
}

const alpha = {}

// eslint-disable-next-line func-names
alpha.data = function () { // ❌ ['data'] of `id-denylist`
  // noop
}

const beta = {
  list: [], // ❌ ['list'] of `id-denylist`
}

class Gamma {
  value = 0

  list = [] // ❌ ['list'] of `id-denylist`

  item () { // ❌ ['item'] of `id-denylist`
    return this.value
  }

  // eslint-disable-next-line no-unused-private-class-members
  #list = [] // ❌ ['list'] of `id-denylist`

  // eslint-disable-next-line no-unused-private-class-members
  #item () { // ❌ ['item'] of `id-denylist`
    return this.value
  }
}

module.exports = {
  extraFunc,
  callback, // ❌ ['callback'] of `id-denylist`
  alpha,
  beta,
  Gamma,
}
