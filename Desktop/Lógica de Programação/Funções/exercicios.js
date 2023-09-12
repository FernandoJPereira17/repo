//Funções nomeadas, arrow function e funções anônimas

/**
 * Contagem de vogais: Escreva uma função que conte o número de vogais
 * em uma string e retorne o resultado.
 * - Recebe uma string por parâmetro
 * - Contar o número de vogais presentes
 * - For
 * - Console.log na quantidade de vogais existentes
 * 
 * Média de notas: Crie uma função que aceite uma matriz/lista(array) 
 * de notas e calcule a média das notas usando um loop for of.
 * - Recebe um array como parâmetro
 * - 10 notas
 * - Média das 10 notas
 * - For of
 * - Console.log na média
 * 
 * Propriedades do objeto: Escreva uma função que aceite um objeto 
 * como argumento e use um loop for in para listar todas as 
 * propriedades e seus valores.
 * - Recebe um objeto como parâmetro
 * - Objeto vai ter nome, idade e email
 * - Console.log em todas as propriedades de cada objeto
 * - For in
 * 
 * Filtrar objetos: Crie uma função que aceite um objeto que contém 
 * informações de alunos (nome, idade, nota) e use um loop for in 
 * para filtrar e listar apenas os alunos que obtiveram uma nota 
 * superior a um determinado valor.
 * - Recebe um objeto
 * - Propriedades (nome, idade, nota)
 * - For in para o loop
 * - Console.log do nome, idade e a nota dos alunos com 
 *   nota maior que 7
 */


// function somar(){
//     console.log(5 + 5,'nomeada');
// }
// const somarArrow = () => {
//     console.log(5 + 5, 'Arrow');
// }

// const somarAnonimo = function (){
//     console.log(5 + 5, 'Anonima');
// }

// somar();
// somarArrow();
// somarAnonimo();

// //Qual a diferença de uma função com parâmetros...?

// function somarNumerosFora(valor1, valor2, nome){
//     console.log(valor1 + valor2, 'parametro', nome);
// }
// function somar (){
//     console.log(5 + 5, 'Nomeada');
// }

// somarNumerosFora(10 , 15, 'Fernando');


// 1ª Questão -  Contagem de vogais: Escreva uma função que conte o número de vogais
//  * em uma string e retorne o resultado.
//  * - Recebe uma string por parâmetro
//  * - Contar o número de vogais presentes
//  * - For
//  * - Console.log na quantidade de vogais existentes



// const minhaString = "DigitalCollegeFullStackFS22-ProfSamuel";
// let contagem = 0;

// function contarLetras(minhaString) {
  
//     for (let i = 0; i < minhaString.length; i++) {
//       if (minhaString[i]) {
//         contagem++;
//       }
//     }
//     return contagem;
//   }
  
//   const numeroDeLetras = contarLetras(minhaString);
//   console.log(`O número de letras na string é: ${numeroDeLetras}`);
  
//Média de notas: Crie uma função que aceite uma matriz/lista(array) 
//  * de notas e calcule a média das notas usando um loop for of.
// * - Recebe um array como parâmetro
// * - 10 notas
// * - Média das 10 notas
// * - For of
// * - Console.log na média


const alunos = [

    {
        nome: 'Fernando',
        idade: 26,
        nota: 7,
    },
    {
        nome: 'Maria',
        idade: 20,
        nota: 9,
    },
    {
        nome: 'Lara',
        idade: 15,
        nota: 8,
    }

];

function alunoAprovado (alunos) {

    for (const index in alunos){
        const aluno = alunos[index];
        if(alunos[index].nota >=7){
            console.log (`O ${aluno.nome} passou com a nota ${aluno.nota}`);
        }
    }
}

alunoAprovado(alunos)