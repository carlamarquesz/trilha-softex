// Crie dois códigos de sistema de notas para uma escola. O primeiro código deve 
// ser um programa que informa se o aluno reprovou, ou não, com base nas três notas que ele adicionou ao programa. 
// Utilize, no mínimo, um operador de atribuição e um operador ternário. 
// O segundo código é um programa que o aluno deve escrever duas notas e o retorno informa 
// a nota mínima que ele deve tirar na próxima prova para poder passar com nota sete.


//Média do aluno
const btn = document.getElementById('btn');
btn.addEventListener('click', function() {
  console.log('Clicou');
  let media;
  let n1 = parseFloat(document.getElementById('n1').value);
  let n2 = parseFloat(document.getElementById('n2').value);
  let n3 = parseFloat(document.getElementById('n3').value); 
  media = (n1 + n2 + n3) / 3;
  let situacao = media >= 7 ? "Aprovado" : "Reprovado";
  if (isNaN(n1) || isNaN(n2) || isNaN(n3)){
    alert('Insira as notas nos campos informados.')
  }else if (n1 < 0 || n2 < 0 || n3 < 0){ 
    alert("Você inseriu valor inválido");
  }else{
    alert(`Média das notas: ${media.toFixed(1)}\nO aluno está ${situacao}!`);
  }
}) 

//Mostrar div
const btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", function() {
  let div = document.querySelector("#notaMinima");
  if(div.style.display === "none") {
        div.style.display = "block";
    } else {
      div.style.display = "none";
  }    
});

//Nota mínima
const btn3 = document.getElementById('btn3');
btn3.addEventListener('click', function() {
  console.log('Clicou btn3');
  let n4 = parseFloat(document.getElementById('n4').value);
  let n5 = parseFloat(document.getElementById('n5').value); 
  n6 = 7*3 - n4 - n5;
  if (isNaN(n4) || isNaN(n5)){
    alert('Insira as notas nos campos informados!')
  }else if(n4<0 || n5<0){
    alert("Você inseriu valor inválido");
  }else if(n6 > 10){
    alert(`Sua próxima nota deve ser: ${n6.toFixed(1)}, logo, o aluno já está reprovado!`)
  }else{
    alert(`Sua próxima nota deve ser: ${n6.toFixed(1)} para ser aprovado com média 7!`);
  }
}) 