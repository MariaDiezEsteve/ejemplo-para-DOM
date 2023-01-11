
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

// 4. Estilos

        // Ejemplo 1:

let changeColor = document.getElementById("title1");
changeColor.style.color = "white";
changeColor.style.backgroundColor = "black";

let changeDiv = document.getElementById("estilos");
changeDiv.style.borderRadius = '50%';
changeDiv.style.display = 'flex';
changeDiv.style.justifyContent = 'center';

        // Ejemplo 2:

let changePart1 = document.getElementById("part1")
changePart1.style.setProperty('font-size', "3rem");

let changePart2 = document.getElementById("part2")
changePart2.style.setProperty('font-size', "2rem")



// 5. Atributos

let getImg = document.querySelector("img");

        // 1. Ejemplo: src

getImg.getAttribute("src");

let newImg = getImg.setAttribute("src", "sincodigosinrazon.png")

        // 2. Ejemplo: alt

getImg.getAttribute("alt");

let newAlt = getImg.setAttribute("alt", "sin codigo no hay razon")

        // 3. Ejemplo: estilos

let getStyle = document.getElementById("estilos")

getStyle.getAttribute("style");

let newStyle = getStyle.setAttribute("style", "text-align: center" )