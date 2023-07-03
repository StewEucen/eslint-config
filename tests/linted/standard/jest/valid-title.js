'use strict'

////////////////////////////////////////////////////////////////////////////////
// Empty Title

describe('', () => {}) // ❌ `jest/valid-title`

describe('Target', () => {
  // eslint-disable-next-line jest/consistent-test-it
  it('', () => { // ❌ `jest/valid-title`
    expect(true)
      .toBeTruthy()
  })
})

// eslint-disable-next-line jest/require-top-level-describe, jest/consistent-test-it
it('', () => { // ❌ `jest/valid-title`
  expect(true)
    .toBeTruthy()
})

// eslint-disable-next-line jest/require-top-level-describe
test('', () => { // ❌ `jest/valid-title`
  expect(true)
    .toBeTruthy()
})

////////////////////////////////////////////////////////////////////////////////
// Accidental Spaced Title

describe(' Target', () => { // ❌ `jest/valid-title`
  test.todo('#method()')
})

describe('Target  ', () => { // ❌ `jest/valid-title`
  test.todo('#method()')
})

// eslint-disable-next-line jest/require-top-level-describe
test.todo(' #method()') // ❌ `jest/valid-title`
// eslint-disable-next-line jest/require-top-level-describe, jest/consistent-test-it
it.todo(' #method()') // ❌ `jest/valid-title`

describe('Target', () => {
  test.todo(' #method()') // ❌ `jest/valid-title`
  test.todo('#method() ') // ❌ `jest/valid-title`
})

////////////////////////////////////////////////////////////////////////////////
// { mustNotMatch: '\\.$' } of `jest/valid-title`

describe('Target.', () => { // ❌ { mustNotMatch: '\\.$' } of `jest/valid-title`
  test.todo('#method().') // ❌ { mustNotMatch: '\\.$' } of `jest/valid-title`
})
