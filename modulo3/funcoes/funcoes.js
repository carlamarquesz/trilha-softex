//uma função tradicional com a palavra reservada “Function” e sem nenhum parâmetro;
//uma função tradicional com parâmetros e um retorno de valor;
//uma arrow function com parâmetros e que retorne um valor.
// Crie um programa que utilize essas três funções de forma lógica, 
// por exemplo: um programa de calculadora.

//funçao sem parametro 
function teste() {
    return  
}
//funçao com parametro 
function testeParametro(num) {
    return (num % 2 == 0) ? 'Número par' : 'Número impar';
}

//arrow function
const testeArrowFuction = (num) => (num % 2 == 0) ? 'Número par' : 'Número impar';

console.log(testeParametro(14))
console.log(testeArrowFuction(14))
 