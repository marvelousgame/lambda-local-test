var e = require("./event.js")
var c = require("./context.js")
var f = require("./index.js")

var event = new e()
var context = new c()

f.handler(event, context)

