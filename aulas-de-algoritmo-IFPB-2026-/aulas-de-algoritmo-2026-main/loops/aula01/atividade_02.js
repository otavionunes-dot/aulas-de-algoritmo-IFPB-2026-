const prompt = require('prompt-sync')();
let lado1= prompt("digite o tamanha do lado 1: ")
let lado2= prompt("digite o tamanha do lado 2: ")
let lado3= prompt("digite o tamanha do lado 3: ")
if(lado1 === lado2 && lado2 === lado3){
    console.log("equilatero")
} else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
    console.log("isósceles");
}else if (lado1 != lado2 !=lado3){
    console.log("escaleno")
}