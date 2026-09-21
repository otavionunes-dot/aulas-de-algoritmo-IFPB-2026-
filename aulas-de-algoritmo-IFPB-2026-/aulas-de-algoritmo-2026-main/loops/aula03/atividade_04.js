const prompt = require('prompt-sync')();
let n= Number(prompt("DIGITE UM NUMERO:"))
for (let i=-15; n>i; n-=4){
    console.log(n)
}