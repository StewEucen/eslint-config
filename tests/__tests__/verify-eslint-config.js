'use strict'

const {
  ESLintInspector,
} = require('@openreachtech/eslint-inspector')

describe('verify ESLint config', () => {
  test('should work as expected', async () => {
    const inspector = await ESLintInspector.createAsyncWithFilePaths([
      'tests/intents/',
    ])

    const unexpectedLog = await inspector.getFormattedLogIfUnexpected()

    expect(unexpectedLog)
      .toBeNull()
  })
})
