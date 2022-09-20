// Com os conceitos aprendidos, crie um programa de calculadora que: 

// receba dois valores, que devem ser salvos em variáveis; 
// o usuário deve colocar qual operador ele vai utilizar por meio dos símbolos aritméticos; 
// com os dois valores e o operador definido, o programa deve fazer a operação e retornar o resultado; 
// se houver divisão, você deve retornar o resultado e a sobra, caso haja alguma. 


var readlineSync = require('readline-sync');
var op = readlineSync.question("Qual operacao deseja efetuar (+) (-) (*) (/)? : ");
var n1 = parseFloat(readlineSync.question("Insira o primeiro numero: "));
var n2 = parseFloat(readlineSync.question("Insira o segundo numero: "));

function calculadora(operador, num1, num2) {
    if (operador  == "+") {
        return num1 + num2;
    } else if
        (operador == "-") {
        return num1 - num2;
    } else if
        (operador == "*") {
        return num1 * num2;
    } else if
        (operador == "/") {
        return num1 / num2;
    } else {
        throw new Error('Operação inválida');
    }
}

console.log('O resultado é', calculadora(op, n1, n2)) 
