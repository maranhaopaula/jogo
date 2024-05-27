var entrada = require('readline-sync');

var decida;
var escolha;
var num = Math.floor(Math.random() * 100);
console.log(num)
var S;
var N;


while (decida != num) {
    decida = entrada.question('Adivinhe o numero secreto de 1 a 100: ');
    if (decida == num) {
        console.log('você acertou');

    }
    else if (decida > num) {
        console.log('O numero é maior que a resposta');

    }
    else if (decida < num) {
        console.log('O numero que voce colocou é menor que a resposta');
    }
    escolha = entrada.question('Voce quer tentar novamente? S/N: ').toUpperCase();
    while (escolha != "S") {
        if (escolha == "S") {
            console.log('voce desejou continuar');
           
        }
        else if (escolha == "N") {
            console.log('Voce desejou parar')
            decida=num
            break
        }
        else {
            console.log("Escolha invalida");
            escolha = entrada.question('Voce quer tentar novamente? S/N: ').toUpperCase();
        }
    }
}
