const prompt = require('prompt-sync')();
soma=0
for(i=0;i<10;i++)
{
    let n=Number( prompt("digite um numero"))
    soma=soma+n;
}
console.log("soma =",soma)