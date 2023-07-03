'use strict'

describe('jest/prefer-expect-assertions', () => {
  test('allow no expect assertions', () => {
    expect(true)
      .toBeTruthy()
  })
})
