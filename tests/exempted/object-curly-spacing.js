'use strict'

const objectNoSpace = { alpha: 1 } // ✅ object-curly-spacing
const objectNoSpaceInArray = [{ beta: 2 }] // ✅ object-curly-spacing
const objectNoSpaceInObject = { root: { gamma: 3 } } // ✅ object-curly-spacing

module.exports = {
  objectNoSpace,
  objectNoSpaceInArray,
  objectNoSpaceInObject,
}
