/**
 * Selecionar elementos  no JS
 * document.getElementById ( 'id do elemento' ); retorna um elemento
 * document.getElementsByClassName ('nome da classe' ); retorna os elementos que possuem a classe
 * document.getElementsByTagName ('Query da busca' ); retorna os elementos que possuem a tag
 * document.querySelector ('Query da busca' );
 * document.querySelectorAll ('Query da busca' );
 * 
 * .innerText - retorna o texto do nosso elemento;
 * .innerHtml - retorna o html do nosso elemento;
 * 
 */

// const texto = document.getElementById('text');
// console.log(texto.innerText = "novo texto");

/**
 * 
 * Criar uma função que ao iniciar o site retorne na div container uma lista de 1 até 5 ol
 * getElementById
 * Função
 *  * Chamar a função -> nomeFunção()
 * innerHtml -> ol com 5 li
 * 
 */

const container = document.getElementById("container"); //1ºPonto
//Função Criada
function iniciarSite() {
    container.innerHtml = `
            <ol>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li> 
            </ol>
        
            `;
}
iniciarSite();
