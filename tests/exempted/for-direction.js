'use strict'

/* eslint-disable no-restricted-syntax */

for (let index = 0; index < 10; index -= 1) { // ✅ exempted `for-direction`
  // no-op
}

for (let index = 10; index >= 0; index += 1) { // ✅ exempted `for-direction`
  // no-op
}

for (let index = 0; index > 10; index += 1) { // ✅ exempted `for-direction`
  // no-op
}
