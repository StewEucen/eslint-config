'use strict'

const {
  ESLintInspector,
} = require('@openreachtech/eslint-inspector')

const messageHash = {
  noDoWhile: 'Never use do-while',
  noFor: 'Never use for',
  noForIn: 'Never use for-in',
}

describe('verify ESLint config', () => {
  test('should work as expected', async () => {
    const inspector = await ESLintInspector.createAsyncWithFilePaths({
      messageHash,
      filePaths: [
        'tests/linted/',
      ],
    })

    const unexpectedLog = await inspector.getFormattedLogIfUnexpected()

    expect(unexpectedLog)
      .toBeNull()
  })
})
