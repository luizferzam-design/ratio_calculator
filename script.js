// Função para calcular o MDC (Máximo Divisor Comum)
function mdc(a, b) {
    if (b === 0) {
        return a;
    }
    return mdc(b, a % b);
}

// Função principal que é chamada ao clicar no botão
function calcularProporcao() {
    // 1. Pega os valores dos campos de input
    const largura = parseInt(document.getElementById('largura').value);
    const altura = parseInt(document.getElementById('altura').value);
    const resultadoDiv = document.getElementById('resultado');

    // 2. Valida se os valores são números válidos
    if (isNaN(largura) || isNaN(altura) || largura <= 0 || altura <= 0) {
        resultadoDiv.textContent = 'Por favor, insira números válidos e maiores que zero.';
        return;
    }

    // 3. Calcula o MDC usando a função
    const divisorComum = mdc(largura, altura);

    // 4. Calcula a proporção dividindo a largura e altura pelo MDC
    const proporcaoLargura = largura / divisorComum;
    const proporcaoAltura = altura / divisorComum;

    // 5. Exibe o resultado na tela
    resultadoDiv.textContent = `A proporção é ${proporcaoLargura}:${proporcaoAltura}`;
}