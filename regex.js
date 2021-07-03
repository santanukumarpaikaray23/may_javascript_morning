RegExp
it stands for regular expression

var a = "hi"
a.match("^([a-z])$")

var a = "h"
a.match("^([a-z])$")
["h", "h", index: 0, input: "h", groups: undefined]
 
var a  = "hi"
a.match("^([a-z]{2})$")
 ["hi", "hi", index: 0, input: "hi", groups: undefined]

var a = "hi"
a.match("^([a-z]{2})$")

var a = "Hi"
a.match("^([a-z]{2})$")
null
var a = "Hi"
a.match("^([A-Za-z]{2})$")
(2) ["Hi", "Hi", index: 0, input: "Hi", groups: undefined]
//range
var a = "iHii"
a.match("^([A-Za-z]{2,5})$")
["iHii", "iHii", index: 0, input: "iHii", groups: undefined]
//any range
var a = "iHii"
a.match("^([A-Za-z]+)$")
(2) ["iHii", "iHii", index: 0, input: "iHii", groups: undefined]
 
var a = "iHii0"
a.match("^([A-Za-z0-9])$")

var a = "iHii90"
a.match("^([D-Ja-z0-9]+)$")
(2) ["iHii90", "iHii90", index: 0, input: "iHii90", groups: undefined]

var a ="iHJii90$"
a.match ("^([D-Ja-z0-9$#@]+)")
(2) ["iHJii90$", "iHJii90$", index: 0, input: "iHJii90$", groups: undefined]

var a ="9934702378"
a.match("^([0-9]{10})$")
var email = "a@a.com"
email.match("^([a-zA-Z0-9]+)@([a-zA-z0-9])\.([a-zA-z]{2,5})&")