/*
Crear una página web con un boton ( pasar ) y dos cuadros de texto (entra y sale).
Inicialmente el cuadro de texto entra está vacío y sale contiene una cadena de caracteres. Con cada
pulsación en el botón se pasará el primer caracter(por la izquierda) de sale y se colocará al final de los
caracteres de entra. Cuando se pase toda la cadena de un cuadro a otro, mostrar un mensaje "cadena
pasada".
*/

let entra = document.getElementById("entra");
let sale = document.getElementById("sale");
let boton = document.getElementById("pasar");

let index = 0;
let arrEntra = [], arrSale = [], arrSale2 = [], palabra; 

boton.addEventListener("click", moverLetra);

function moverLetra(){
    // if (index === arrSale.length){
    //     //Desactivar botón
    //     boton.style.display = "none";
    // } else {}

    palabra = sale.value;
    //Split para separar la palabra
    arrSale = palabra.split("");
    
    arrEntra.push(arrSale[index]);
    index++;
    //Shift para borrar el primer elemento de un array
    arrSale2 = arrSale.shift();
    console.log(arrSale2);
    console.log(arrSale);

    entra.innerText = arrEntra.join("");
    // console.log(arrEntra.join(""));
    sale.innerText = arrSale2;

}
