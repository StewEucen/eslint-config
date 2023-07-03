'use strict'

function setupAlpha (options) {
  /* ... */
}

function setupBeta (options) {
  /* ... */
}

describe('no-hooks', () => {
  // eslint-disable-next-line no-restricted-syntax
  let target = null

  beforeEach(() => { // ✅ exempted `jest/no-hooks`
    target = setupAlpha()
  })

  afterEach(() => { // ✅ exempted `jest/no-hooks`
    target = null
  })

  test('does something', () => {
    expect(target.doesSomething())
      .toBeTruthy()
  })

  describe('with extra', () => {
    // eslint-disable-next-line no-restricted-syntax
    let extra = null

    beforeEach(() => { // ✅ exempted `jest/no-hooks`
      extra = setupBeta()
    })

    afterEach(() => { // ✅ exempted `jest/no-hooks`
      extra = null
    })

    test('does something with extra', () => {
      expect(target.doesSomething(extra))
        .toBeTruthy()
    })
  })
})
