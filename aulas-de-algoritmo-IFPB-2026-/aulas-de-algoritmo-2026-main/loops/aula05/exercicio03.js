const prompt = require('prompt-sync')();
let n=prompt("digite um numero: ")
if(n>0){
    for (let i= 1; i<=n; i++){
        console.log(i)
    }
}
else{
    console.log("digite um numero maior que 0")
}