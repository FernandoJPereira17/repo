/**
 * Array é um tipo de dado que permite guardar mais um valor na mesma variável;
 */
// const frutas = ['maça', 'banana'];

//Lenght é uma propriedade que contabiliza a quantidade total de itens de um array;
// console.log(frutas.length);

//Para acessar um item do array é necessário colocar o index do mesmo entre colchetes;
// console.log(frutas[0]);

//Supondo que tenhamos um array com 10 índces..
//0 1 2 3 4 5 6 7 8 9 10...
//Lenght = 2
// chega no índice 1 quando colocar no console - 1;

//Acessar o último elemento do array
// console.log(frutas[frutas.length -1]);

//Atenção...............................<>
// frutas.map((fruta, index) =>{
//     return console.log(fruta, index);
// });
// console.log(frutas);

//método map seria basicamente o for da lógica de programação;
// for (let i = 0; i < frutas.length; i++){
//     const element = frutas[i];
//     console.log(element, i);
// }

//Exercício de Método Map;
// Exercícios

// 1 - Dobrar Números: Crie uma função que recebe um array de números 
// e retorna um novo array onde cada número é dobrado.
//Solução 1:

// const numeros = [10, 20, 30, 40, 50];

// numeros.map((numeros, index)=> {

// console.log(numeros * 2);

// });

// 2 - Converter Temperaturas: Escreva uma função que recebe 
// um array de temperaturas em graus Celsius e retorna um novo array com as temperaturas equivalentes em Fahrenheit.
//Solução 2:

// const temperatura = [25, 26, 27, 28, 29, 30, 31, 32];

// temperatura.map ((temperatura, index) =>{
//     console.log(Fahrenheit = ((temperatura *1.8) + 32).toFixed(2));
// });

// 3 - Calcular Quadrados: Escreva uma função que recebe 
// um array de números e retorna um novo array onde cada número é elevado ao quadrado.
//Solução 3:
// const num = [2, 4, 6, 8, 10];

// const map1 = num.map ((x) => x * 2);
//     console.log(map1);


// 4 - Filtrar Números Pares: Escreva uma função que recebe um array 
// de números e retorna um novo array contendo apenas os números pares.
// //Solução 4:
// const numeral = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// numeral.map((numeral) =>{
//     if (numeral % 2 === 0){
//         console.log(numeral);
//     }
// });


// 5 - Calcular Comprimento de Strings: Escreva uma função 
// que recebe um array de strings e retorna um novo array com o comprimento de cada string.
//Solução 5:

// const strings = ["hum", "dois", "tres", "quatro"];
// strings.map((string)=>{
//     return console.log(string.length);
// });


/** Métodos abaixos : < .............. >
 * Push, pop, unshift, shift
 */
// const frutas = ['Maca', 'Banana', 'pera'];
// console.log(frutas);

//=> Push envia o valor para o final do array...
// frutas.push("Abacaxi");
// console.log(frutas);

//=> Pop exclui o último elemento do array...
// frutas.pop();
// console.log(frutas);

// => shift = Remove o primeiro elemento do array... 
// frutas.shift();
// console.log(frutas);

// => unshift = Adiciona o primeiro elemento do array...
// frutas.unshift('Uva');
// console.log(frutas);


// const numbers0 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const numbers1 = [12, 13, 14, 15, 16, 17, 18, 19, 20, 21];

// function doubleNumbers(arr){
//     const double = arr.map((value)=> value * 2);
//     return double;
// };

// console.log(doubleNumbers(numbers0));
// console.log(doubleNumbers(numbers1));

// <> 

// Melhorando Solução 2:

// const temperature = [25, 26, 27, 28, 29, 30, 31, 32];

// function celciusToFahrenheit(arr) {
//     const fahreinheit = arr.map((temp) => {
//       const newTemp = (temp * 1.8 + 32).toFixed(2);
//       return Number(newTemp);
//     });

//     return fahreinheit;
//   }

//   console.log(celciusToFahrenheit(temperature));

//...............................................//

//Refatoração//

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const numbers2 = [6, 7, 8, 9, 15];
// const temperature = [42, 33.5, 17, 9, -5, 12];

// numbers.map((number) => {
//   return console.log(number ** 2);
// });



// numbers.map((number) => {
//   if (number % 2 === 0) {
//     return console.log(number);
//   }
// });

//Refatoração <...>

// const numberr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function evenNumbers(arr) {
//   const newArr = [];

//   arr.map((numberr) => {
//     if (numberr % 2 === 0) {
//       return newArr.push(numberr);
//     }
//   });
//   return newArr;
// }

// console.log(evenNumbers(numbers));


// const strings = ["Um", "Teste", "Outra string", "Mais um teste"];

// strings.map((string) => {
//   return console.log(string.length);
// });

// function doubleNumbers(arr) {
//   const double = arr.map((value) => value * 2);

//   return double;
// }

// console.log(doubleNumbers(numbers));
// console.log(doubleNumbers(numbers2));

// function celciusToFahrenheit(arr) {
//   const fahreinheit = arr.map((temp) => {
//     const newTemp = (temp * 1.8 + 32).toFixed(2);
//     return Number(newTemp);
//   });

//   return fahreinheit;
// }

// console.log(celciusToFahrenheit(temperature));

/**
 * Exercícios com map

Exercícios com map

Calcular Áreas:
Crie uma função que recebe um array de objetos, onde cada objeto possui as propriedades 
largura e altura, e retorna um novo array com as áreas correspondentes (largura * altura).

Transformar Datas:
Crie uma função que recebe um array de strings representando 
datas no formato "dd/mm/yyyy" e retorna um novo array com as datas no formato "mm/dd/yyyy".

Contagem de Vogais:
Escreva uma função que recebe um array de palavras e retorna um novo array com a contagem de vogais em cada palavra.

Remover Elementos Nulos:
Escreva uma função que recebe um array que pode conter 
valores nulos (null) e retorna um novo array sem os valores nulos.

*/

const medidas = [
	{ altura: 10, largura: 15 },
	{ altura: 20, largura: 10 },
	{ altura: 42, largura: 5 },
	{ altura: 28, largura: 5 },
];

function calcularArea (arr){
  const area = arr.map ((area) => {
    const newArea = area.altura * area.largura;
    return newArea;
  });
  return area;
};

console.log(calcularArea(medidas));


function nome (){
    const newnome = arr.map(() =>{

    });
    return
};