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



const minhaString = "DigitalCollegeFullStackFS22-ProfSamuel";
let contagem = 0;

function contarLetras(minhaString) {

    for (let i = 0; i < minhaString.length; i++) {
        if (minhaString[i]) {
            contagem++;
        }
    }
    return contagem;
}

const numeroDeLetras = contarLetras(minhaString);
console.log(`O número de letras na string é: ${numeroDeLetras}`);

//Média de notas: Crie uma função que aceite uma matriz/lista(array) 
//  * de notas e calcule a média das notas usando um loop for of.
// * - Recebe um array como parâmetro
// * - 10 notas
// * - Média das 10 notas
// * - For of
// * - Console.log na média

function filtrarAlunosPorNota(alunos, notaMinima) {
    // Inicializa um array para armazenar os alunos que atendem ao critério
    const alunosFiltrados = [];

    // Loop através das propriedades do objeto (que representam os alunos)
    for (const aluno in alunos) {
        // Verifica se a propriedade é um objeto (para garantir que seja um aluno)
        if (typeof alunos[aluno] === 'object') {
            // Verifica se a nota do aluno é maior que a nota mínima especificada
            if (alunos[aluno].nota > notaMinima) {
                // Adiciona o aluno ao array de alunos filtrados
                alunosFiltrados.push({
                    nome: alunos[aluno].nome,
                    idade: alunos[aluno].idade,
                    nota: alunos[aluno].nota,
                });
            }
        }
    }

    // Retorna o array de alunos que atendem ao critério
    return alunosFiltrados;
}

// Exemplo de uso da função
const listaDeAlunos = {
    aluno1: {
        nome: "João",
        idade: 20,
        nota: 8.5,
    },
    aluno2: {
        nome: "Maria",
        idade: 22,
        nota: 7.0,
    },
    aluno3: {
        nome: "Pedro",
        idade: 21,
        nota: 9.2,
    },
};

const notaMinima = 8.0;
const alunosAprovados = filtrarAlunosPorNota(listaDeAlunos, notaMinima);

console.log("Alunos com nota superior a", notaMinima);
console.log(alunosAprovados);
