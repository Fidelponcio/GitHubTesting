let tabla = document.querySelector("td");

let boton2 = document.querySelector(".idk2");

let ayudita = document.querySelector(".ayudita");

tabla.addEventListener("click", cambiarProp);
boton2.addEventListener("mousedown", mouseDown);
boton2.addEventListener("mouseup", mouseUp);
boton2.addEventListener("mouseover", moverDiv);
boton2.addEventListener("mouseout", dejarDMover);
boton2.addEventListener("click", delDiv)

function cambiarProp(evento){
    evento.target.style.color= "white";
    evento.target.style.backgroundColor= "black";
    evento.target.style.border= "solid grey 3px";
    tabla.innerHTML="Pulsado";
}

function mouseDown(evento){
    evento.target.style.color= "white";
    evento.target.style.backgroundColor= "black";
    evento.target.style.border= "solid grey 3px";
}

function mouseUp(evento){
    evento.target.style.color= "black";
    evento.target.style.backgroundColor= "white";
    evento.target.style.border= "solid grey 3px";
}

function moverD (evento){
    let x= evento.clientX;
    let y= evento.clientY;
    ayudita.style.left= `${x}px`;
    ayudita.style.top= `${y}px`;
}

function moverDiv(evento){
    boton2= evento.target;
    document.addEventListener("mousemove", moverD);
    ayudita.style.visibility=" visible";
}

function dejarDMover(){
    document.removeEventListener("mousemove", moverD);
}

function delDiv(){
    ayudita.style.visibility="hidden";
}