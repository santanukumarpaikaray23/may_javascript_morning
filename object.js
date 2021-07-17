var moviename ="Avengers"
var movierating=4.5
var movielang ="English"

var moviename1 ="Jab we met"
var movierating1=4.8
var movielang1 ="Hindi"

var movies = {
    name:'Avenger',
    rating:4.4,
    language:'English'

}
var movies = {
    name:'Avengers',
    rating:4.4,
    language:'English'
    
}
for(key in movies){
    console.log(key)
}
var movies = {
    name:'Avengers',
    rating:4.4,
    language:'English'
    
}
for(key in movies){
    console.log(movies[key])
}
///
var calc ={
    sum:function(a,b){return a+b},
    sub: (a,b) => {return a-b}
}
calc.sum(1,2)
3
calc.sub(9,2)
7
var dbQuery = {
    find:(table)=>{return `Select * from ${table}`},
    insert:(table,data) => {return `insert into ${table}name,city values(${data.name},${data.city})}`

}
dbQuery.find('students')
"Select * from students"
dbQuery.find('employee')
"Select * from employee"
dbQuery.insert('Employee',{name:'John',city:'Delhi'})
"insert into Employeename,city values(John,Delhi)"
