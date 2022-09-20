// Implemente e trate uma conexão com o seu banco de dados, usando JavaScript. 
//Caso a conexão com o banco tenha sucesso, ele deve retornar uma frase positiva. 
//Se isso não ocorrer, retorne uma frase informando o erro.


const Sequelize = require('sequelize')
const sequelize = new Sequelize('testebanco', 'root', '123', {
  host: 'localhost',
  dialect: 'mysql', 
})

sequelize.authenticate().then(function(){
    console.log("A conexão com o banco de dados foi estabelecida!");  
}).catch(function(erro){
    console.log("Falha ao se conectar: " + erro);  
});