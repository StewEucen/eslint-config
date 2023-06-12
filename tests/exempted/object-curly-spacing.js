'use strict'

const objectNoSpace = { alpha: 1 } // ✅ by object-curly-spacing
const objectNoSpaceInArray = [{ beta: 2 }] // ✅ by object-curly-spacing
const objectNoSpaceInObject = { root: { gamma: 3 } } // ✅ by object-curly-spacing

module.exports = {
  objectNoSpace,
  objectNoSpaceInArray,
  objectNoSpaceInObject,
}
