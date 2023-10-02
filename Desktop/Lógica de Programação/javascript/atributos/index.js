/**
 * element.getAttribute(attribute)
 */


const container = document.getElementById("container");
const p = document.createElement("p");
container.appendChild(p);
p.innerText = 'Texto';

p.setAttribute("class", "texto"); // -> Define class = "texto"
p.setAttribute("id", "paragrafo"); // -> Define id = "paragrafo"

console.log(p.getAttribute("class")); //-> recebe o valor do atributo class
console.log(p.getAttribute("id")); //-> recebe o valor do atributo id

p.removeAttribute("id"); //-> remove o atributo...
p.removeAttribute("");