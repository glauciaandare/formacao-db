let numeros = [];
for (let i = 0; i < 10; i++) {
    numeros.push(Math.floor(Math.random() * 101));
}

console.log("Números gerados são: " + numeros.join(", "));

let menor = Math.min(...numeros);
let maior = Math.max(...numeros);

console.log("Menor número é: " + menor);
console.log("Maior número é: " + maior);
