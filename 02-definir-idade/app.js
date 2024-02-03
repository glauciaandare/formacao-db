const readline = require('readline-sync');

let idade = readline.question('Digite a idade: ');
idade = parseInt(idade);

if(idade >= 18){
    console.log('Você maior de idade.');
}else {
    console.log('Você não é maior de idade.');
}