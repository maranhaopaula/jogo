var entrada = require('readline-sync');
var escolha;
var decida;

while (true) {
    escolha = entrada.question('Digite a operacao ( + | - | * | % | / | ** | sair ): ');
  
    if (escolha === 'sair') {
        console.log(`Você saiu.`);
        break;
    }
  
    if (['+', '-', '*', '/', '**', '%'].includes(escolha)) {
        var num1 = parseFloat(entrada.question('Digite um numero: '));
        var num2 = parseFloat(entrada.question('Digite um segundo numero: '));

        switch (escolha) {
            case '+':
                console.log(`Adicao: ${num1 + num2}`);
                break;
            case '-':
                console.log(`Subtracao: ${num1 - num2}`);
                break;
            case '*':
                console.log(`Multiplicacao: ${num1 * num2}`);
                break;
            case '/':
                if (num2 === 0) {
                    console.log(`Erro: divisão por zero.`);
                } else {
                    console.log(`Divisao: ${num1 / num2}`);
                }
                break;
            case '**':
                console.log(`Potenciacao: ${Math.pow(num1, num2)}`);
                break;
            case '%':
                console.log(`Radiciacao: ${Math.sqrt(num1)}`);
                break;
            default:
                console.log('Operacao invalida');
        }
    } else {
        console.log('Operacao invalida');
    }

    decida = entrada.question('Voce deseja parar? S/N: ').toUpperCase();
    while (true) {
        if (decida === 'S') {
            console.log('Você desejou parar.');
            break;
        } else if (decida === 'N') {
            console.log('Você desejou continuar.');
            break;
        } else {
            console.log("Escolha invalida");
            decida = entrada.question('Voce quer tentar novamente? S/N: ').toUpperCase();
        }
    }

    if (decida === 'S') {
        break;
    }
}