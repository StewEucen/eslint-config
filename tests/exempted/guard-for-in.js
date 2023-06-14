'use strict'

function doSomething (key) {
  // no-op
}

const array = [
  1,
  3,
  5,
]

for (const key in array) {
  doSomething(key) // ✅ exempted `guard-for-in`
}
