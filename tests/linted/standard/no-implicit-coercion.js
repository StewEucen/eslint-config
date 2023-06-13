'use strict'

/** @type {*} */
const foo = '100'

const alpha = !!foo // ❌ boolean:true of `no-implicit-coercion`
const beta = ~foo.indexOf(".") // ❌ number:true of `no-implicit-coercion`
const gamma = +foo // ❌ number:true of `no-implicit-coercion`
const delta = 1 * foo // ❌ number:true of `no-implicit-coercion`
const epsilon = '' + foo // ❌ string:true of `no-implicit-coercion`

/** @type {*} */
let bar = 1
bar += '' // ❌ string:true of `no-implicit-coercion`

/**
 * @type {{
 *   first: *,
 * }}
 **/
const zeta = {
  first: 1,
}
zeta.first += '' // ❌ string:true of `no-implicit-coercion`

const eta = `${foo}` // ❌ disallowTemplateShorthand:true of `no-implicit-coercion`

module.exports = {
  alpha,
  beta,
  gamma,
  delta,
  epsilon,
  zeta,
  eta,
}
