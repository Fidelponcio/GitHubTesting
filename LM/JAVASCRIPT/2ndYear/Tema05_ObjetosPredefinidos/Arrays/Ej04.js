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

// let index = 0;
let arrEntra = [], arrSale = [], arrSale2 = [], palabra; 

boton.addEventListener("click", moverLetra);

function moverLetra(){
    palabra = sale.value.split("");
    arrEntra = palabra.shift();
    arrSale = palabra.join("");
    entra.value += arrEntra;
    sale.value = arrSale;


    console.log(arrSale);
    console.log(arrEntra);

    if (arrSale === ""){
        boton.style.display = "none";
        sale.style.pointerEvents = "none";
    }
}
