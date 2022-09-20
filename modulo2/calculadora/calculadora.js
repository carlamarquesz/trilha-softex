// Com os conceitos aprendidos, crie um programa de calculadora que: 

// receba dois valores, que devem ser salvos em variáveis; 
// o usuário deve colocar qual operador ele vai utilizar por meio dos símbolos aritméticos; 
// com os dois valores e o operador definido, o programa deve fazer a operação e retornar o resultado; 
// se houver divisão, você deve retornar o resultado e a sobra, caso haja alguma. 


const btn = document.getElementById('btn');
btn.addEventListener('click', function() {
  console.log('Clicou'); 
  let num1 = parseFloat(document.getElementById('num1').value);
  let num2 = parseFloat(document.getElementById('num2').value);
  let operador = document.getElementById('operador').value;  
  if (isNaN(num1) || isNaN(num2) || operador == ""){
    alert('Insira as notas nos campos informados.')
  }else if (operador == "+"){ 
    let x = num1 + num2; 
    alert(`A soma ${num1} + ${num2} = ${x}`);
  }else if (operador == "-"){ 
    let x = num1 - num2; 
    alert(`A subtração ${num1} - ${num2} = ${x}`);
  }
  else if (operador == "*"){ 
    let x = num1 * num2; 
    alert(`A multiplicação ${num1} + ${num2} = ${x}`);
  }
  else if (operador == "/"){ 
    let x = num1 / num2; 
    let y = num1%num2;
    if (y != 0){
      alert(`A divisão ${num1} / ${num2} = ${x.toFixed(1)} com resto ${y}`);
    }else{
      alert(`A divisão ${num1} / ${num2} = ${x}`);
    } 
  }else{
    alert("Não foi possível calcular o resultado.");
  }
}) 