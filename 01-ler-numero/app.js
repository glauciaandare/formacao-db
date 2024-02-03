const readline = require('readline-sync');

let numero;

do {
  numero = readline.question('Digite um numero: ');
  numero = parseInt(numero); 
} while (numero !== 10);

console.log('Voce digitou 10! O loop terminou.');

