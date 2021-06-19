var city = "london"

city.toUpperCase()
"LONDON"
city.toLowerCase()
"london"
city.length
6
city[0]
"l"
city[1]
"o"

var city = "amsTeRDam"
city.charAt(0)
var city = "amsTeRDam"
city.charAt(0)
"a"
city.charAt(1)
"m"
city.charAt(5)
"R"
city.slice(1)
city.charAt(5)
"R"
city.slice(1)
"msTeRDam"
city.slice(4)
"eRDam"
city.slice(6)
"Dam"

var city = "amsTeRDam"
city.charAt(0).toUpperCase()

var city = "amsTeRDam"
city.slice(1).toLowerCase()
city.charAt(0).toUpperCase()+city.slice(1).toLowerCase()

city.slice(-1)

city.slice(-2)

city.slice(-2)
"am"
city.slice(-4)
"RDam"
city.slice(-3,-3)
""
city.slice(3,-3)
"TeR"
var a = "i am learning javascript"
a.replace('javascript','js')
"i am learning js"
var a ="javascript i am learning javascript"
a.replace('javascript','js')
"js i am learning javascript"
var name = " Bhumika . "
name.replace(/ /g,'')
"Bhumika."
name.replace(/ /g,'-')
"-Bhumika-.-"

