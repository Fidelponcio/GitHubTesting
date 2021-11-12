//let enlaces= document.links
//let formularios= document.forms

//Colección de párrafos
let parrafos=[...document.getElementsByTagName("p")];

let primerLi= document.querySelector("li");

let clase1=[...document.getElementsByClassName("clase1")];

parrafos.forEach(p => {
    p.style.color="red";
    p.style.backgroundColor="black";
});

primerLi.style.border="solid orange 3px";

tabla.style.border="solid green 3px";