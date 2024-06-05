'use strict'

/* eslint-disable class-methods-use-this */
/* eslint-disable no-shadow */

/**
 * Lint sample for id-length rule.
 */
class IdLength {
  /**
   * A method.
   *
   * @param {number} first - A number.
   * @returns {number} - Single A.
   */
  a (first) { // ❌ `id-length`
    return first + first
  }

  /**
   * X method.
   *
   * @param {number} x - A number.
   * @returns {number} - Single A.
   */
  power (x) { // ❌ `id-length`
    return x * x
  }

  /**
   * Getter: handling.
   *
   * @returns {object} - An object.
   */
  get $ () { // ✅ `id-length`
    return {}
  }

  /**
   * Value of alpha method.
   *
   * @param {Array} array - Array of number.
   * @returns {object} - An object.
   */
  alphaMethod (array) {
    return array.map(
      (
        _, // ✅ `id-length`
        index
      ) => index
    )
  }
}

const lowerHash = {
  a: 1, // ❌ `id-length`
  b: 2, // ❌ `id-length`
  c: 3, // ❌ `id-length`
  d: 4, // ❌ `id-length`
  e: 5, // ❌ `id-length`
  f: 6, // ❌ `id-length`
  g: 7, // ❌ `id-length`
  h: 8, // ❌ `id-length`
  i: 9, // ❌ `id-length`
  j: 10, // ❌ `id-length`
  k: 11, // ❌ `id-length`
  l: 12, // ❌ `id-length`
  m: 13, // ❌ `id-length`
  n: 14, // ❌ `id-length`
  o: 15, // ❌ `id-length`
  p: 16, // ❌ `id-length`
  q: 17, // ❌ `id-length`
  r: 18, // ❌ `id-length`
  s: 19, // ❌ `id-length`
  t: 20, // ❌ `id-length`
  u: 21, // ❌ `id-length`
  v: 22, // ❌ `id-length`
  w: 23, // ❌ `id-length`
  x: 24, // ❌ `id-length`
  y: 25, // ❌ `id-length`
  z: 26, // ❌ `id-length`
}

const upperHash = {
  A: 1, // ❌ `id-length`
  B: 2, // ❌ `id-length`
  C: 3, // ❌ `id-length`
  D: 4, // ❌ `id-length`
  E: 5, // ❌ `id-length`
  F: 6, // ❌ `id-length`
  G: 7, // ❌ `id-length`
  H: 8, // ❌ `id-length`
  I: 9, // ❌ `id-length`
  J: 10, // ❌ `id-length`
  K: 11, // ❌ `id-length`
  L: 12, // ❌ `id-length`
  M: 13, // ❌ `id-length`
  N: 14, // ❌ `id-length`
  O: 15, // ❌ `id-length`
  P: 16, // ❌ `id-length`
  Q: 17, // ❌ `id-length`
  R: 18, // ❌ `id-length`
  S: 19, // ❌ `id-length`
  T: 20, // ❌ `id-length`
  U: 21, // ❌ `id-length`
  V: 22, // ❌ `id-length`
  W: 23, // ❌ `id-length`
  X: 24, // ❌ `id-length`
  Y: 25, // ❌ `id-length`
  Z: 26, // ❌ `id-length`
}

const a = 1 // ❌ `id-length`
const b = 2 // ❌ `id-length`
const c = 3 // ❌ `id-length`
const d = 4 // ❌ `id-length`
const e = 5 // ❌ `id-length`
const f = 6 // ❌ `id-length`
const g = 7 // ❌ `id-length`
const h = 8 // ❌ `id-length`
const i = 9 // ❌ `id-length`
const j = 10 // ❌ `id-length`
const k = 11 // ❌ `id-length`
const l = 12 // ❌ `id-length`
const m = 13 // ❌ `id-length`
const n = 14 // ❌ `id-length`
const o = 15 // ❌ `id-length`
const p = 16 // ❌ `id-length`
const q = 17 // ❌ `id-length`
const r = 18 // ❌ `id-length`
const s = 19 // ❌ `id-length`
const t = 20 // ❌ `id-length`
const u = 21 // ❌ `id-length`
const v = 22 // ❌ `id-length`
const w = 23 // ❌ `id-length`
const x = 24 // ❌ `id-length`
const y = 25 // ❌ `id-length`
const z = 26 // ❌ `id-length`

const A = 1 // ❌ `id-length`
const B = 2 // ❌ `id-length`
const C = 3 // ❌ `id-length`
const D = 4 // ❌ `id-length`
const E = 5 // ❌ `id-length`
const F = 6 // ❌ `id-length`
const G = 7 // ❌ `id-length`
const H = 8 // ❌ `id-length`
const I = 9 // ❌ `id-length`
const J = 10 // ❌ `id-length`
const K = 11 // ❌ `id-length`
const L = 12 // ❌ `id-length`
const M = 13 // ❌ `id-length`
const N = 14 // ❌ `id-length`
const O = 15 // ❌ `id-length`
const P = 16 // ❌ `id-length`
const Q = 17 // ❌ `id-length`
const R = 18 // ❌ `id-length`
const S = 19 // ❌ `id-length`
const T = 20 // ❌ `id-length`
const U = 21 // ❌ `id-length`
const V = 22 // ❌ `id-length`
const W = 23 // ❌ `id-length`
const X = 24 // ❌ `id-length`
const Y = 25 // ❌ `id-length`
const Z = 26 // ❌ `id-length`

module.exports = {
  IdLength,
  lowerHash,
  upperHash,

  a,
  b,
  c,
  d,
  e,
  f,
  g,
  h,
  i,
  j,
  k,
  l,
  m,
  n,
  o,
  p,
  q,
  r,
  s,
  t,
  u,
  v,
  w,
  x,
  y,
  z,

  A,
  B,
  C,
  D,
  E,
  F,
  G,
  H,
  I,
  J,
  K,
  L,
  M,
  N,
  O,
  P,
  Q,
  R,
  S,
  T,
  U,
  V,
  W,
  X,
  Y,
  Z,
}
