'use strict'

const target = {}

// eslint-disable-next-line jest/no-focused-tests
describe.only('alpha', () => { // ❌ { object: describe, property: only } of `no-restricted-properties`
  test('#method()', () => {
    expect(target)
      .toBeTruthy()
  })

  test('#extra()', () => {
    expect(target)
      .toBeTruthy()
  })
})

// eslint-disable-next-line jest/no-disabled-tests
describe.skip('beta', () => { // ❌ { object: describe, property: skip } of `no-restricted-properties`
  test('#method()', () => {
    expect(target)
      .toBeTruthy()
  })

  test('#extra()', () => {
    expect(target)
      .toBeTruthy()
  })
})

describe('gamma', () => {
  test('#extra()', () => {
    expect(target)
      .toBeTruthy()
  })

  // eslint-disable-next-line jest/no-focused-tests
  test.only('super class', () => { // ❌ { object: test, property: only } of `no-restricted-properties`
    expect(target)
      .toBeTruthy()
  })

  // eslint-disable-next-line jest/no-disabled-tests
  test.skip('constructor', () => { // ❌ { object: test, property: skip } of `no-restricted-properties`
    expect(target)
      .toBeTruthy()
  })
})

// eslint-disable-next-line jest/prefer-lowercase-title
describe('Delta', () => {
  test('#method()', () => {
    expect(target)
      .toBeTruthy()
  })

  // eslint-disable-next-line jest/no-focused-tests, jest/consistent-test-it
  it.only('super class', () => { // ❌ { object: it, property: only } of `no-restricted-properties`
    expect(target)
      .toBeTruthy()
  })

  // eslint-disable-next-line jest/no-disabled-tests, jest/consistent-test-it
  it.skip('constructor', () => { // ❌ { object: it, property: skip } of `no-restricted-properties`
    expect(target)
      .toBeTruthy()
  })
})
