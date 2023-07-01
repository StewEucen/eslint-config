'use strict'

const 漢字 = 'kanji' // ❌ ^[\$\w]+$ of `id-match`

function 関数 () { // ❌ ^[\$\w]+$ of `id-match`
  // noop
}

// eslint-disable-next-line camelcase
const snake_case = 'snake' // ✅ ^[\$\w]+$ of `id-match`
const _value = 0 // ✅ ^[\$\w]+$ of `id-match`
const $value = 0 // ✅ ^[\$\w]+$ of `id-match`

const CONSTANT_VALUE = 100 // ❌ ^[\$\w]+$ of `id-match`

class Alpha {
  漢字 = 'kanji' // ❌ classFields:true of ^[\$\w]+$ of `id-match`
}

const extra = {}
const {
  分割代入, // ❌ ignoreDestructuring:true, ^[\$\w]+$ of `id-match`
} = extra

module.exports = {
  漢字, // ❌ properties:tre, ^[\$\w]+$ of `id-match`
  関数, // ❌ properties:tre, ^[\$\w]+$ of `id-match`
  // eslint-disable-next-line camelcase
  snake_case, // ✅ properties:tre, ^[\$\w]+$ of `id-match`
  _value, // ✅ properties:tre, ^[\$\w]+$ of `id-match`
  $value, // ✅ properties:tre, ^[\$\w]+$ of `id-match`

  CONSTANT_VALUE, // ❌ properties:tre, ^[\$\w]+$ of `id-match`

  Alpha,

  分割代入, // ❌ properties:tre, ^[\$\w]+$ of `id-match`
}
