'use strict'

// Above a describe block
test.todo('my test', () => {}) // ❌ `jest/require-top-level-describe`

describe('test suite', () => {
  test.todo('test')
})

// Below a describe block
test.todo('my test') // ❌ `jest/require-top-level-describe`
