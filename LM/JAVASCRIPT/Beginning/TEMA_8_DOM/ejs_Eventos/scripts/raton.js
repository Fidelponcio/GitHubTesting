//creamos los tres botones
let botones = ([boton1, boton2, boton3] = [
  ...document.getElementsByTagName("td"),
]);
let boton;
let tabla = document.querySelector("table");
//aplicamos eventos sobre los botones

/* botones.forEach(boton => {
    boton.addEventListener("mousedown", pulsar)
    //boton.addEventListener("mousedown",mover)
    boton.addEventListener("mouseup", liberar)
    boton.addEventListener("mouseenter",entra)
    boton.addEventListener("mouseout",sale)
    boton.addEventListener("click",seleccionMover)
   // boton.addEventListener("contextmenu",mover)
}); */

tabla.addEventListener("mousedown", pulsar);
tabla.addEventListener("mouseup", liberar);
tabla.addEventListener("mouseover", entra);
tabla.addEventListener("mouseout", sale);
tabla.addEventListener("click", seleccionMover);

document.addEventListener("contextmenu", dejarDeMoverBoton);

function pulsar(evento) {
    evento.target.style.color = "white";
    evento.target.style.backgroundColor = "black";
    evento.target.style.borderColor = "grey";
  //debugger;
}

function liberar(evento) {
  evento.target.style.color = "black";
  evento.target.style.backgroundColor = "white";
  evento.target.style.borderColor = "black";
 // debugger;
}

function entra(evento) {
    evento.target.style.backgroundColor = "red";
  
}

function sale(evento) {
  evento.target.style.backgroundColor = "white";
 // debugger;
}

function moverBoton(evento) {
  //evento.preventDefault();
  //alert("Mensaje de aviso");
  let x = evento.clientX;
  let y = evento.clientY;
  boton.style.left = `${x}px`;
  boton.style.top = `${y}px`;
}

function seleccionMover(evento) {
  boton = evento.target;
  document.addEventListener("mousemove", moverBoton);
 // debugger;
}

function dejarDeMoverBoton(evento) {
  evento.preventDefault();
  document.removeEventListener("mousemove", moverBoton);
}
