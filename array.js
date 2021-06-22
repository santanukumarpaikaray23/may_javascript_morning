//array is the collectin of similar/non similar datatype

var a = [1,2,3,4,5,45,74](Array of Number)
var b = ['santanu','happy','sidhanta','lucky'](array of String)
var c = [true,false,false,true](array of Boolean)

var d = [3,4,5,'c','santanu',34,true,false,'samddm']

var city = ["London","Delhi","NewYork","Paris"]
undefined
city[0]
"London"
city[1]
"Delhi"
typeof(city[1])
"string"
city.length
4
city[city.length-1]
"Paris"
city[city.length-2]
"NewYork"
city[3]
"Paris"
var city = ["london","Delhi","NewYork","Paris"]
undefined
city.push('Amsterdam')
5
["london","Delhi","NewYork","Paris","Amsterdam"]
city.push('Dubai','Venice')
6
["london","Delhi","NewYork","Paris","Amsterdam","Dubai","Venice"]
Note:
---------
push add the value at the end of the array.

var city = ["london","Delhi","NewYork","Paris"]
city.pop()
"Paris"
["london","Delhi","Newyork"]

["london","Delhi","Newyork"]
city.pop(2)
["london","Delhi","Newyork","Pakistan"]
city.pop(3)
Note:
-------
pop always remove the last value of the array


var city = ["London","Delhi","Newyork","Paris","Amsterdam"]
city.shift()
"London"
var city = ["London","Delhi","Newyork","Paris","Amsterdam"]
city.shift(3)
"London"
["Delhi","NewYork","Paris","Amsterdam"]
Note:
------
shift remove at lost value of the array

var city = ["London","Delhi","Newyork","Paris","Amsterdam"]
city.unshift("Nirakarapur")
6
["Nirakarpur","London","Delhi","Newyork","Paris","Amsterdam"]
Note:
-------
unshift add the begin of the array

var city = ["London","Delhi","Newyork","Paris","Amsterdam"]
undefined
city.slice(1)
(4) ["Delhi", "Newyork", "Paris", "Amsterdam"]
city.slice(2)
(3) ["Newyork", "Paris", "Amsterdam"]
city
(5) ["London", "Delhi", "Newyork", "Paris", "Amsterdam"]
var city = ["London","Delhi","Newyork","Paris","Amsterdam"]
undefined
city.slice(3,4)
["Paris"]
var city = ["London","Delhi","Newyork","Paris","Amsterdam"]
undefined
city.slice(2,5)
(3) ["Newyork", "Paris"]

var city = ["London","Delhi","Newyork","Paris","Amsterdam"]
undefined
city.splice(2,2)
(2) ["Newyork", "Paris"]
["London","Delhi","Amsterdam"]
city.splice(1,0,'Mumbai')
["Lindon","Mumbai","Delhi","Amsterdam"]

var a =['a','b','c',1]
var b =[1,2,3]
a+b
"a,b,c,11,2,3"