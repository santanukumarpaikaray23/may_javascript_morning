// function add(a,b,c,d){
//     return a+b+c+d
// }
// var num = [1,2,3,4]

// console.log(add(num))

function add(a,b,c,d){
    return a+b+c+d
}
var num = [1,2,3,4]
add(...num)

var cars = ['kia','BMW','Volvo']
var car2= ['Sokda','Merc','Audi','Nexa']
output = ['Sokda','Merc',...cars,'Audi','Nexa']
(7) ["Sokda", "Merc", "kia", "BMW", "Volvo", "Audi", "Nexa"]

function mul(a,b,c){
    return a*b*c
}
mul(1,2,3)
6
function mul(a){
    return function(b){
        return function(c){
            return a*b*c
        }

    }
}
mul (1)(2)(3)