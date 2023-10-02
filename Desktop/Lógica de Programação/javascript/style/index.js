/**
 * Adicionar uma class => 
    element.classList.add(className)
 * Remover uma class => 
    element.classList.remove(className)
 * Remove ou adiciona uma class => 
    element.classList.toggle(className)
 * Adiciona um valor a uma propriedade CSS
 * element.style.property = value
 * Ex: element.style.color = 'red'
 */

// const container = document.getElementById("container");
// const p = document.createElement("p");
// container.appendChild(p);
// p.innerText = "Texto Aqui";

// p.classList.add("hidden");
// p.classList.remove("hidden");
// p.classList.add("show");

// p.classList.toggle("show");
// p.classList.toggle("hidden");

// p.style.display = 'flex';
// p.style.fontSize = '100px';
// p.style.color = 'red';

/**
 * Criem um elemento P e um elemento H1
 * Inserir na DIV
 * Colocar um texto padrão: "Texto" e "Título"
 * Criar duas classes, um para cada elemento
 * Atribui a seus respectivos elementos
 * 
 */

const container = document.getElementById("container");
const p = document.createElement("p");
container.appendChild(p);
p.innerText = "Texto";
p.classList.add("Texto");

const paragrafo = document.getElementById("container1");
const h1 = document.createElement("h1");
container.appendChild(h1);
h1.innerText = "Título";
h1.classList.add("Titulo");



