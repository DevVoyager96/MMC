// Inclui o módulo 'process' para entrada/saída padrão
const process = require('process');

// Cria uma instância do 'readline' para leitura de entrada
const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

// Variáveis para armazenar os números inseridos pelo usuário
let num1, num2;

// Pede ao usuário para inserir o primeiro número
rl.question('Digite o primeiro número: ', (answer) => {
  num1 = parseInt(answer); // Converte a entrada para número inteiro

  // Pede ao usuário para inserir o segundo número
  rl.question('Digite o segundo número: ', (answer) => {
    num2 = parseInt(answer); // Converte a entrada para número inteiro

    // Verifica se as entradas são números válidos
    if (isNaN(num1) || isNaN(num2)) {
      console.log('Por favor, insira números inteiros válidos.');
    } else {
      // Calcula o MDC (Máximo Divisor Comum)
      let a = num1;
      let b = num2;
      while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
      }
      const mdc = a;

      // Calcula o MMC (Mínimo Múltiplo Comum)
      const mmc = (num1 * num2) / mdc;

      // Exibe o resultado
      console.log(`O MMC de ${num1} e ${num2} é: ${mmc}`);
    }

    // Fecha a interface de leitura
    rl.close();
  });
});
