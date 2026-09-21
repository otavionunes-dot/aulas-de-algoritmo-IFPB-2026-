const prompt = require('prompt-sync')();
let n = Number(prompt("Digite um número:"));


for (let i = 0; i < n; i += 2) {
    console.log(i);
}