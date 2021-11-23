let div1 = document.querySelector(".div1");
let div2= document.querySelector(".div2");

let div= document.querySelectorAll("div"); //Devuelve una NodeList...


document.addEventListener("mouseover", moverCoor);
document.addEventListener("keydown", showKey);

// ... por lo que creamos los eventos con un for of (también podría hacerse 
// ... con for each o transformar la NodeList a array con Array.from() )

for (const d of div) { 
    d.addEventListener("click", cambBgc);
    d.addEventListener("contextmenu", cambBgc2);
}


function coor(evento){
    let x= evento.clientX;
    let y= evento.clientY;
    div1.style.fontSize= "16px";
    div1.innerHTML=`x= ${x}px | y= ${y}px`;
}

function moverCoor(evento){
    document= evento.target;
    document.addEventListener("mousemove", coor); 
}

function showKey(evento){
    div2.innerHTML= evento.key + " " + evento.keyCode;
}

//boton primario amarillo boton secundario azul
function cambBgc(evento){
    evento.target.style.backgroundColor="darkorange";
}

function cambBgc2(evento){
    evento.preventDefault();
    evento.target.style.backgroundColor="cyan";
}