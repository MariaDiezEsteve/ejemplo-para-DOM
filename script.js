let changeColor1 = document.getElementById('black');

function changeColor(losColores) {
    let myBro = document.getElementById('black');

    if(losColores === "blue"){
        return myBro.style.color = "blue"
    } else if (losColores ==="red") {
    return myBro.style.color = "red"
    }
}

changeColor()

 let selector = document.querySelector('.rojo');
 selector.style.color = "red";

 let selector1 = document.querySelector('#rojo1');
 selector1.style.color = "blue"