'use strict'

const array = []

for (let index = 0; index < 10; index += 1) {
  if (index === 5) {
    continue // ✅ exempted `no-continue`
  }

  array.push(index)
}

module.exports = array
