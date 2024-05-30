
function gerarTabuada() {
    const numeroInput = document.getElementById('numero');
    const erroElement = document.getElementById('erro');
    const resultadoElement = document.getElementById('resultado');
    const numero = parseInt(numeroInput.value);

    // Limpar mensagens anteriores
    erroElement.textContent = '';
    resultadoElement.innerHTML = '';

    // Verificar se o número é um inteiro válido
    if (isNaN(numero)) {
        erroElement.textContent = 'Por favor, insira um número inteiro válido.';
        return;
    }

    // Gerar a tabuada
    let tabela = '<table><thead><tr><th>Multiplicação</th><th>Resultado</th></tr></thead><tbody>';
    for (let i = 1; i <= 10; i++) {
        tabela += `<tr><td>${numero} x ${i}</td><td>${numero * i}</td></tr>`;
    }
    tabela += '</tbody></table>';

    // Exibir a tabuada na página
    resultadoElement.innerHTML = tabela;
}
