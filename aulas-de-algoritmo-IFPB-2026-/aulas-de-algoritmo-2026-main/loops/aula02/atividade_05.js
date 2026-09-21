const prompt = require('prompt-sync')();
multiplicacao=1
for(i=1;i<=10;i++)
{
    let n=Number( prompt("digite um numero"))
    soma=soma*n;
}
console.log("multiplicacao =",soma)