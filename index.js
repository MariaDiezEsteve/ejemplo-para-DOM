
console.log("Hello World")

// 1. Leer: innerText

let title = document.querySelector("h1")
console.log (title)
console.log (title.innerText)


// 2. Modificar: innerHTML

        // Ejemplo 1

const title2 = document.getElementById("title2");
title2.innerHTML = "Fruta";

const title3 = document.getElementById("title3");
title3.innerHTML = "Verduras";


// 3. Estilos

        // Ejemplo 1:

let changeColor = document.getElementById("title1");
// changeColor.style.color = "white";
// changeColor.style.backgroundColor = "black";

 let changeDiv = document.getElementById("estilos");
//  changeDiv.style.borderRadius = '50%';
//  changeDiv.style.display = 'flex';
//  changeDiv.style.justifyContent = 'center';

        // Ejemplo 2:

let changePart1 = document.getElementById("part1")
// changePart1.style.setProperty('font-size', "3rem");

let changePart2 = document.getElementById("part2")
// changePart2.style.setProperty('font-size', "2rem")



// 4. Atributos

let patata = document.querySelector("img");

        // 1. Ejemplo: src

let imagen = patata.getAttribute("src");
console.log(imagen)

// patata.setAttribute("src", "sincodigosinrazon.png")

        // 2. Ejemplo: alt

patata.getAttribute("alt");

// patata.setAttribute("alt", "sin codigo no hay razon")


        // 3. Ejemplo: estilos

let kiwi = document.getElementById("estilos")

kiwi.getAttribute("style");
        
// kiwi.setAttribute("style", "text-align: center" )


// 5. classList

let ejemplo = document.getElementById("lista-clases")

ejemplo.classList.add("mystyle")


console.log(ejemplo)

// 6. value

let valor = document.getElementById("nombre").value;
console.log(valor)