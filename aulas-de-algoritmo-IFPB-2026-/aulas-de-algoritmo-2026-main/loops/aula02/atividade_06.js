const prompt = require('prompt-sync')();
let idade = Number(prompt('Digite seu numero'));

if (idade > 18) {
  for (let i = 0; i <= idade; i++) {
    console.log('vc tem ' + i);
  }
} else {
  for (let a = 0; a <= idade; a++) {
    console.log('vc tem ' + a);
  }
}
