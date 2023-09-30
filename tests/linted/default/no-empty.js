'use strict'

const alpha = false
const beta = 0

if (alpha) {} // ❌ `no-empty`

// eslint-disable-next-line no-restricted-syntax, no-unmodified-loop-condition
while (alpha) {} // ❌ `no-empty`

// eslint-disable-next-line no-restricted-syntax
for (let next = 0; next < beta; next += 1) {} // ❌ `no-empty`

// eslint-disable-next-line no-restricted-syntax
switch (beta) {} // ❌ `no-empty`

try /* ❌ `no-empty` */ {
} catch (error) /* ❌ `no-empty` */ {
} finally /* ❌ `no-empty` */ {
}

module.exports = {
  alpha,
  beta,
}
