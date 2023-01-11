
console.log("Hello World")

// 1. Leer: innerText

let titleDOM = document.querySelector("h1")
console.log(titleDOM)
console.log(titleDOM.innerText)


// 2. Modificar: innerHTML

        // Ejemplo 1

const title = document.getElementById("title2");

title.innerHTML = "Fruit";

console.log(title)
console.log(title.innerText)

        // Ejemplo 2

const paragraph = document.createElement("p"); 

paragraph.innerHTML = "Acabo de crear este párrafo";

console.log(paragraph)
console.log(paragraph.innerText)


let color = document.getElementById("title1");
color.style.color = "blue";



