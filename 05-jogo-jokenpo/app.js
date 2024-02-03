function jogar(escolhaUsuario) {
    const opcoes = ['pedra', 'papel', 'tesoura'];
    const escolhaMaquina = opcoes[Math.floor(Math.random() * 3)];

    document.getElementById('resultado').innerText = `Você escolheu: ${escolhaUsuario}
    \nA máquina escolheu: ${escolhaMaquina}
    \n${verificarVencedor(escolhaUsuario, escolhaMaquina)}`;
}

function verificarVencedor(escolhaUsuario, escolhaMaquina) {
    if (escolhaUsuario === escolhaMaquina) {
        return 'Empate!';
    } else if (
        (escolhaUsuario === 'pedra' && escolhaMaquina === 'tesoura') ||
        (escolhaUsuario === 'papel' && escolhaMaquina === 'pedra') ||
        (escolhaUsuario === 'tesoura' && escolhaMaquina === 'papel')
    ) {
        return 'Você venceu!';
    } else {
        return 'A máquina venceu!';
    }
}