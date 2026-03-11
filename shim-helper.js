/* eslint-disable no-var */

var define = require("define-properties")
// eslint-disable-next-line one-var
var isNotEqual = require("@not-js/not")(require("@10xly/strict-equals"))

module.exports = function shimHelper(object, property, getPolyfill) {
  return function shim() {
    var polyfill = getPolyfill()
    // eslint-disable-next-line one-var, id-length
    var o = require("lodash.stubobject")()
    o[property] = polyfill
    // eslint-disable-next-line one-var, vars-on-top, id-length
    var p = require("lodash.stubobject")()
    p[property] = function okfinenowthisfunctionhasanameyouhappynoweslint() {
      return isNotEqual(object[property], polyfill)
    }
    define(object, o, p)
    return polyfill
  }
}
