var entrada = require('readline-sync');
var escolha;
var decida;
escolha = entrada.question('Digite a operacao ( + | - | * | % | / | ** | sair ): ');

while (escolha != 'sair') {
  
    if (escolha == '+') {
        var num1 = parseFloat(entrada.question('Digite um numero: '));
        var num2 = parseFloat(entrada.question('Digite um segundo numero: '));
        console.log(`Adicao: ${num1 + num2}`);
      
    } else if (escolha == '-') {
        var num1 = parseFloat(entrada.question('Digite um numero: '));
        var num2 = parseFloat(entrada.question('Digite um segundo numero: '));
        console.log(`Subtracao: ${num1 - num2}`);
     
    } else if (escolha == '*') {
        var num1 = parseFloat(entrada.question('Digite um numero: '));
        var num2 = parseFloat(entrada.question('Digite um segundo numero: '));
        console.log(`Multiplicacao: ${num1 * num2}`);
      
    } else if (escolha == '/') {
        var num1 = parseFloat(entrada.question('Digite um numero: '));
        var num2 = parseFloat(entrada.question('Digite um segundo numero: '));
        console.log(`Divisao: ${num1 / num2}`);
       
    } else if (escolha == '**') {
        var num1 = parseFloat(entrada.question('Digite um numero: '));
        var num2 = parseFloat(entrada.question('Digite um segundo numero: '));
        console.log(`Potenciacao: ${Math.pow(num1, num2)}`);
       
    } else if (escolha == '%') {
        var num1 = parseFloat(entrada.question('Digite um numero: '));
        console.log(`Radiciacao: ${Math.sqrt(num1, 2)}`);
     
} else if(escolha=='sair'){console.log(`Voce saiu`);break}else{
        console.log('Operacao invalida');
     
    }
    decida = entrada.question('Voce deseja parar? S/N: ').toUpperCase();
     while (decida != "S") {
        if (decida == "N") {
            console.log('voce desejou continuar');
            break
            
           
        }
        else if (decida == "S") {
            console.log('Voce desejou parar')
            escolha='sair'
            break
        }
        else {
            console.log("Escolha invalida");
            decida = entrada.question('Voce quer tentar novamente? S/N: ').toUpperCase();
        }
    }
}
