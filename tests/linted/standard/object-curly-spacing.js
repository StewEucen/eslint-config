'use strict'

const objectNoSpaceAfterOpened = {alpha: 1 } // ❌ linted object-curly-spacing
const objectNoSpaceBeforeClosed = { beta: 1} // ❌ linted object-curly-spacing
const objectNoSpaceBoth = {gamma: 1} // ❌ linted object-curly-spacing

const objectNoSpaceAfterOpenedInArray = [{alpha: 1 }] // ❌ linted object-curly-spacing
const objectNoSpaceBeforeClosedInArray = [{ beta: 1}] // ❌ linted object-curly-spacing
const objectNoSpaceBothInArray = [{gamma: 1}] // ❌ linted object-curly-spacing

const objectNoSpaceAfterOpenedInObject = { root: {alpha: 1 } } // ❌ linted object-curly-spacing
const objectNoSpaceBeforeClosedInObject = { root: { beta: 1} } // ❌ linted object-curly-spacing
const objectNoSpaceBothInObject = { root: {gamma: 1} } // ❌ linted object-curly-spacing

module.exports = {
  objectNoSpaceAfterOpened,
  objectNoSpaceBeforeClosed,
  objectNoSpaceBoth,
  objectNoSpaceAfterOpenedInArray,
  objectNoSpaceBeforeClosedInArray,
  objectNoSpaceBothInArray,
  objectNoSpaceAfterOpenedInObject,
  objectNoSpaceBeforeClosedInObject,
  objectNoSpaceBothInObject,
}