var a = [4,5,6,78,34,11,21,57]
a.map((data)=>{console.log(data)})

var a = [4,5,6,78,34,11,21,57]
a.map((data)=>{return data})


var a = [4,5,6,78,34,11,21,57]
a.map((data)=>{return data*2})
[8, 10, 12, 156, 68, 22, 42, 114]

var a = [4,5,6,78,34,11,21,57]
a.map((data) =>{return `<p>${data*2}</p>`})
["<p>8</p>", "<p>10</p>", "<p>12</p>", "<p>156</p>", "<p>68</p>", "<p>22</p>", "<p>42</p>", "<p>114</p>"]

>map is use to iterate over the Array
>it always return same length of output as input Array.
>it is use to apply logics(sum,mul,div)or return html , bind data

var a = [4,5,6,78,34,11,21,57]
a.filter((data)=>{return data>10})
 [78, 34, 11, 21, 57]
->filter is used to filter out the value.
->it may or may not return same length of input Array.
->it only return those value for which condition /output is true.

var a = [0,1,2,3]
a.map((data)=>{return data*2})
[0,2,4,6]
a.filter((data)=>{return data*2})
0>false 0
2> true 1
4>true 2
6>true 3
[1,2,3]