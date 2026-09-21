const prompt = require('prompt-sync')();
let idade = Number(prompt(`digite sua idade: `))

let nome = prompt(`digite seu nome: `)
while (idade > 18) {
    if (IDADE > 18) {
        console.log(nome + "você pode comprar aqui no mercadinho");
    }
}
if (idade > 100) {
    console.log(nome + "ENCONTREI UM ANCIÃO");

} else if (idade < 18) {
    console.log(nome + "você não pode comprar aqui no mercadinho");
}
