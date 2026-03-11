/* eslint-disable no-var */

var defineProperties = require("define-properties")

var implementation = require("./implementation")
var getPolyfill = require("./polyfill")
var shim = require("./shim")

// eslint-disable-next-line one-var
var polyfill = getPolyfill()

function getBlur() {
  return polyfill
}

defineProperties(getBlur, {
  // eslint-disable-next-line object-shorthand
  getPolyfill: getPolyfill,
  // eslint-disable-next-line object-shorthand
  implementation: implementation,
  // eslint-disable-next-line object-shorthand
  shim: shim,
})

module.exports = getBlur
