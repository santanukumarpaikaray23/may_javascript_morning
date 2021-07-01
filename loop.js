for
while
do while
for of
for in
Map
filter

///////////
for>it help ous to generate series of value or help to iterate  over the Array.
//////////
for(var i=0;i<5;i++){
    console.log(i)

}

for(var i=0;i<5;i++){
    console.log(i)

}
 0
 1
 2
 3
 4
undefined

var a =10
for (i=0;i<5;i++){
    console.log(a+i)
}
var city = ["London","Delhi","NewYork","Paris"]
for (i=0;i<city.length;i++){
    console.log(city[i])
}

for (i=0;i<5;i++){
    for (j=0;j<5;j++){
        console.log(i+j)
    }
}

var myarray = ["Amsterdam","Dubai",["Bmw","Audi","Skoda"],"Edinberg","London","Mumbai"]
for(i=0;i<myarray.length;i++){
    if(Array.isArray(myarray[i])){
        for (j=0;j<myarray[i].length;j++){
            console.log(myarray[i][j])
        }
    }else{
        console.log(myarray[i])
    }
}
/////
while
//////
var i =10
while(i<5){
    console.log(i)
    i++
}

/////////
do while
/////////
var i =10
do{
    console.log(i)
    i++
}
while(i<5)

///////
for of
///////
var city =["London","Delhi","New York","Paris"]
for(mycity of city){
    console.log(mycity)
}

var city = ["Amsterdam","Dubai",["Bmw","Audi","Skoda"],"Lodon","Mumbai"]
for (mycity of city){
    if(Array.isArray(mycity)){
        for(cars of mycity){
            console.log(cars)

        }
    }else{
        console.logs(mycity)
    }
}

var data;
for(i=0;i<5;i++){
    data=data+`${1}`
}
console.log(data)

var data;
for(i=0;i<5;i++){
    data=data+`${1},`
}
console.log(data)
 undefined11111
undefined

var city = ["London","Delhi","Newyork","Paris"]
var out=""
for(i=0;i<city.length;i++){
    out += `${city[i]},`
}

var city = ["London","Delhi","NewYork","Paris"]
for(i=0;i<city.length;i++){
    console.log(city[i])
}