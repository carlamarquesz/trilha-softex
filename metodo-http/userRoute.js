// Nas duas primeiras linhas do arquivo tem o express e o express.Router que será 
//utilizado para montar as rotas nesse arquivo para depois exportar.

// Depois tem as rotas e por fim o module.exports, que exporta todas as rotas definidas. 
//Este exemplo é uma simulação de rotas para uma API de usuários.

var express = require('express');
var router = express.Router(); 
router.use(express.json()); // faz com que o express entenda JSON
const dados = [{ nome: "Carla", idade: 25, profissao: "Estudante"},
              { nome: "Juan", idade: 25, profissao: "Engenheiro de Soft"}]

function checarArray(req, res, next) {
  const usuario = dados[req.params.index];
  if (!usuario) {
    return res.status(400).json({ error: 'Usuário não existe' });
  } // checa se o dado existe no array, caso negativo informa que o index não existe no array
  req.usuario = usuario;
  return next();
}

router.get('/usuarios', (req, res) => {
  return res.json(dados);
}) 

router.get('/usuarios/:index', checarArray, (req, res) => { 
    return res.json(dados[req.params.index]);
})

router.post('/usuarios', (req, res) => {  
    const { nome } = req.body; 
    const { idade } = req.body;
    const { profissao } = req.body; 
    const novoDado = { nome: nome, idade: idade, profissao: profissao} 
    dados.push(novoDado);    
    return res.json(dados); 
})

router.put('/usuarios/:index', (req, res) => {
  const { index } = req.params; // recupera o index com os dados
  const { nome } = req.body; 
  const { idade } = req.body;
  const { profissao } = req.body; 
  const novoDado = { nome: nome, idade: idade, profissao: profissao} 
  dados[index] = novoDado; // sobrepõe/edita o index obtido na rota de acordo com o novo valor 
  return res.json(dados);
}); 

router.delete('/usuarios/:index', checarArray, (req, res) => {
  const { index } = req.params; 
  dados.splice(index, 1); // percorre o vetor até o index selecionado e deleta uma posição no array
  return res.send(`Usuário com posição ${index} deletado!`);
});

module.exports = router;