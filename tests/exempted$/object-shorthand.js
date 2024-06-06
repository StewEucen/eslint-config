'use strict'

/* eslint-disable arrow-body-style */

////////////////////////////////////////////////////////////////////////////////
// avoidExplicitReturnArrows: false

const alpha = {
  firstFunc: (first, second) => first + second, // ✅ avoidExplicitReturnArrows:false of `object-shorthand`
  secondFunc: first => first * 2, // ✅ avoidExplicitReturnArrows:false of `object-shorthand`
}

////////////////////////////////////////////////////////////////////////////////
// avoidExplicitReturnArrows: false

const beta = {
  firstFunc: (first, second) => { // ✅ avoidExplicitReturnArrows:true of `object-shorthand`
    return first + second
  },

  secondFunc: first => { // ✅ avoidExplicitReturnArrows:true of `object-shorthand`
    return first * 2
  },
}

module.exports = {
  alpha,
  beta,
}
