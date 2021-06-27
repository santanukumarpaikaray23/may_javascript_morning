var a = 10
var b = 20
a+b
30

///////
type of functions
(1)regular function
(2)arrow function
(3)iffi
(4)generator
///////////////
//// regular function////
function sub(a,b){
    
    return a-b
}
sub(34,23)

function isEven(userInput){
    var out;
    if(userInput%2==0){
        out =`Number ${userInput} is even`
    }else{
        out=`Number ${userInput} is odd`
    }
    return out
}

function test(a,b){
    return a,b
}
test(1,2)
function test(a,b){
    return a,b
}
test(1,2)
2
function test(a,b){
    return a,b
}
test(hii,bye)

function test(a,b){
    var out = [a,b]
    return out
}
test(1,4)

function test(a,b){
    var out = [a,b]
    return out
}
test(1,4)
(2) [1, 4]
////es6
///Rest
function add(...args){
    console.log(args)
}
add(1,2,3,4,6)

method>when function assign to variable is become method.


var add = function(a,b){
    return a+b
}
add(1,2)
///es6///
///factarrow function///

let add = (a,b)=>{ return a+b }
add(1,2)
3
//////
immediately invoke function (IFFI)
//////////
function sayHi(){
    console.log("hiiii")
}
sayHi()

function sayHi(){
    console.log("hiiii")
}
sayHi()

 hiiii

 function loop(userInput){
     for(i=0;i<userInput;i++){
         console.log(i)
     }
 }
 loop(10)

