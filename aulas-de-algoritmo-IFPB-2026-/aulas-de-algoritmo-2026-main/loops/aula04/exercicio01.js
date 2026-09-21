const prompt = require('prompt-sync')();
let idade1=0
while (idade1<=100) {
    let idade = Number(prompt(`digite sua idade: `))

    let nome = prompt(`digite seu nome: `)
    if (idade > 18&&idade<100) {
        console.log(nome + " você pode comprar aqui no mercadinho");
    }
    else if (idade > 100) {
        console.log(nome + " ENCONTREI UM ANCIÃO");

    } else if (idade < 18) {
        console.log(nome + " você não pode comprar aqui no mercadinho");
    }
    console.log(idade1)
    idade1 ++
}

