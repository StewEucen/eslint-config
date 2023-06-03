'use strict'

const {
  ESLintInspector,
} = require('@openreachtech/eslint-inspector')

test('should work as expected', async () => {
  const inspector = await ESLintInspector.createAsyncWithFilePaths([
    'tests/intents/',
  ])

  const unexpectedLog = await inspector.getFormattedLogIfUnexpected()

  expect(unexpectedLog)
    .toBeNull()
})
