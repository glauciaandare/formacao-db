const readline = require('readline-sync');

function calcularValorTotal() {
    
    let nomeProduto = readline.question('Informe o nome do produto: ');
    let precoUnitario = parseFloat(readline.question('Informe o preco unitario do produto: '));
    let quantidade = parseInt(readline.question('Informe a quantidade de produtos comprados: '));

    let valorTotal;

    if (quantidade <= 10) {
        valorTotal = precoUnitario * quantidade;
    } else if (quantidade <= 20) {
        valorTotal = precoUnitario * quantidade * 0.9; // 10% de desconto
    } else if (quantidade <= 50) {
        valorTotal = precoUnitario * quantidade * 0.8; // 20% de desconto
    } else {
        valorTotal = precoUnitario * quantidade * 0.75; // 25% de desconto
    }

    console.log(`Produto: ${nomeProduto}`);
    console.log(`Valor total a ser pago: R$ ${valorTotal.toFixed(2)}`);
}

calcularValorTotal();
