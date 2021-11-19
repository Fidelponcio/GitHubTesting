//coleccion de parrafos

//window.addEventListener("DOMContentLoaded",function(){
let parrafos=[...document.getElementsByTagName("p")]

let primerLI=document.querySelector("li")

let clase1=[...document.getElementsByClassName("clase1")];

parrafos.forEach(element => {
    element.style.color="red";
    element.style.backgroundColor="black"
});

primerLI.style.border="solid orange 3px";

tabla.style.border="solid green 3px";
//})

//debugger;