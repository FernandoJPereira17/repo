const btnBlack = document.getElementById('btnBlack');
const btnBlue = document.getElementById('btnBlue');
const btnOpenModal = document.getElementById('btnOpenModal');
const btnCloseModal = document.getElementById('btnCloseModal');
const container1 = document.getElementById("container1");
const container2 = document.getElementById("container2");
const modal = document.getElementById("modal");

const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const btnCalc = document.getElementById('btnCalc');
const result = document.getElementById('resultado');

function changeBgColor() {
   container1.classList.toggle("bgBlue");
}

function changeBgColorBlack() {
   container2.classList.toggle("bgBlack");
}

//  function openModal(){
//    modal.style.display = 'flex';
//  }

//  function closeModal(){
//    modal.style.display = 'none';
//  }

function openModal() {
   modal.classList.remove('hidden');
   modal.classList.add('show');
}

function closeModal() {
   modal.classList.remove('show');
   modal.classList.add('hidden');
}

modal.addEventListener('click', closeModal);
btnBlue.addEventListener('click', changeBgColorBlack);
btnBlack.addEventListener('click', changeBgColor);
btnOpenModal.addEventListener('click', openModal);
btnCloseModal.addEventListener('click', closeModal);

btnCalc.addEventListener('click', () => {
   let value1 = Number (input1.value);
   let value2 = Number (input2.value);
   let sum = value1 * value2;
   result.innerText = sum;
});


/**
 * 
 * <!---Exercício--->

JS

const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const btnCalc = document.getElementById("btnCalc");
const result = document.getElementById("resultado");

function sum(v1, v2) {
  return v1 * v2;
}

function showResult(resultado) {
  const finalResult = (result.innerText = resultado);
  return finalResult;
}

btnCalc.addEventListener("click", () => {
  let value1 = Number(input1.value);
  let value2 = Number(input2.value);
  const total = sum(value1, value2);
  return showResult(total);
});

HTML

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercício</title>
</head>
<body>
    <input id="input1" type="text">
    <input id="input2" type="text">
    <button id="btnCalc">Calcular</button>
    <div id="resultado"></div>
    <script src="./index.js"></script>
</body>
</html>
 */


