//multiple condition and multiple output (ifelse)
//one condition and one output (ternary)
//one condition and multiple output (switch)

var name = "Eva"

switch(name){
    case 'Akash':
    console.log(`hi ${name}`)
    case 'Eva':
        console.log(`hi ${}`)
        default:
            console.log(`hi default case`)
}
var input = 2

switch(input%2){
    case 0:
    console.log(`Number is even`)
    break;
    case 1:
        console.log(`Number is odd`)
        default:
            console.log(`hi default case`)
}
switch (new Date().getDay()){
    case 0:
        console.log(`Today is Sunday`)
        break;
        case 2:
            console.log(`Today is tuesday`)
            break;
            default:
                console.log(`Invalid input`)
}