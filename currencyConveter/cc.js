const url="http://data.fixer.io/api/latest?access_key=10b816fb390183d161cc164e53490b9c";


// es5
function convert(){
    var out = document.getElementById('out').value;
    var amount = document.getElementById('amount').value;
    //call api
    fetch(url, {method:'GET'})
    //return promise
    .then((res) => res.json())
    .then((data)=>{
var final = data.rates[out]*Number(amount)
var result = `Converted Value of ${amount} Eur is ${final} ${out}`
document.getElementById('output').innerText = result
    })
}