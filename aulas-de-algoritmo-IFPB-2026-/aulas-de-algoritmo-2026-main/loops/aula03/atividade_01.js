const prompt = require('prompt-sync')();
let n = Number( prompt("digite um numero: ")) 
if(n>=0){
for (n; n<=1000; n++ ){
    console.log(n)
}}
else {
    console.log("digite um numero inteiro")
}