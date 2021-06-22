if (condition){
   //do something
}else{
   //do something
}
let b = 45341
if(b%2==0){
    console.log(`Number ${b} is even`)
}else{
    console.log(`Number ${b} is odd`)
}

var name ="lucky";
if(name=="lucky"){
    console.log(`Hi ${name} you are admin`)
}else if(name=="sandeep"){
    console.log(`Hi ${name} you are superadmin`)
}else {
    console.log(`Hi ${name} i don't you`)
}

var role = "Admin"
var name = "John"
if(role =="Admin"){
    if(name=="Aakash"){
        console.log(`hi ${name} you are ${role}`)
    }else{
        console.log(`hi ${name} you are unknown`)
    }
}else if(role=="User"){
    if(name=="Aakash"){
        console.log(`hi ${name} you are ${role} `)
    }else{
        console.log(`hi ${name} you are unknown`)
    }
}
var name = "Tina"
if(name == "Tina" || name =="Nikita"){
    console.log(`hi ${name} you are welcome`)
}
var name = "Tina"
if(name=="Tina" && role=="Admin"){
    console.log(`hi ${name} you are ${role}`)
}

var name = "Tina"
if(name=="Tina" &&(role=="Admin" || role=="User")){
    console.log(`hi ${name} you are ${role}`)
}
var a =1
if(a){
    console.log("hi")
}else{
    console.log("Bye")
}
Ternary >single line if else
var a=10
a>10?"hii":"Bie"
output:"Bie"
var a=10
a==10?"hii":"Bie"
Note:If the condition before the question mark is true,first part will run else second part
will run.
var a=10
a>10?a+1:a-1
9
a==10?a+1:a-1
11