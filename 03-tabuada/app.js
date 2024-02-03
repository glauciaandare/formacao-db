const readline = require('readline-sync');

let numero = readline.question('Digite o numero da tabuada: ');
numero = parseInt(numero);

for (let  i = 1; i <= 10; i++) {
    const resultado = numero * i;
    console.log(`tabuada ${numero} x ${i} = ${resultado}`);
}

