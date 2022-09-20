// Crie um código JavaScript no back-end utilizando o Node.JS. 
// No código, você deverá elaborar uma ou mais rotas, que podem ser de qualquer tipo (get, put etc). 
// Depois, faça um teste em aplicações de rota, como o Postman ou o Insomnia, 
// para confirmar se o retorno está coerente com o que você programou.

const express = require('express')
const app = express()
const port = 3000

var userRoute = require('./userRoute');
app.use('/', userRoute);

app.listen(port, () => {
  console.log(`Exemplo app node rodando no endereço http://localhost:${port}`)
});