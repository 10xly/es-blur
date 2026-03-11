/* eslint-disable no-var */

var getPolyfill = require("./polyfill")
var shimHelper = require("./shim-helper")
var globalObj = require("@10xly/global")

function shim() {
  shimHelper(globalObj, require("./name"), getPolyfill)()
}

module.exports = shim
