// Desenvolva um código e crie nele:

// - um objeto com, no mínimo, três propriedades;
// - um array de tamanho três no mínimo;
// - duas funções, a primeira lista as propriedades do objeto e a segunda, os elementos do array.

let pessoa = {
    nome: 'Carla',
    idade: 25,
    profissao: 'Desenvolvedora',
    possuiFaculdade: true,
}
const c = ['Engraçada', 'Dorameira', 'Tímida', 'Gamer'];
function propriedades(){
    for (const propriedade in pessoa) {
        console.log(`${propriedade}: ${pessoa[propriedade]}`)
    }
};
function caracteristicas(){
    for (let i = 0; i < c.length; i++) {
        console.log(c[i]);
    }
}; 
propriedades()
console.log('*'.repeat(20))
caracteristicas()