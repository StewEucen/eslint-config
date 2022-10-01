// @ts-check
'use strict'

const {
  ESLint,
} = require('eslint')

describe('ESLint structure', () => {
  test('files', async () => {
    // 1. Create an instance.
    const eslint = new ESLint()

    // 2. Lint files.
    const lintTargetFiles = await eslint.lintFiles([
      'tests/targets/**/*.js',
    ])

    console.dir(lintTargetFiles, { depth: 5 })
  })
})
