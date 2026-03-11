/* eslint-disable no-var */
var setFunctionName = require("set-function-name")
var $Function = require("standard-objects-function")
var name = require("./name")

module.exports = setFunctionName($Function(), name)