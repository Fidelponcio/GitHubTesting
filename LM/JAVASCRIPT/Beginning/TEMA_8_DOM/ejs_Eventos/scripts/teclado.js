let pelota=document.querySelector("img")
document.addEventListener("keydown", muevoBola);

function muevoBola(evento) {
  //   capturar posicion de la pelota
  let x=pelota.offsetLeft;
  let y=pelota.offsetTop;
  
  switch (evento.keyCode) {
    case 37:
        x-=5
        pelota.style.left=`${x}px`;
      break;
    case 38:
        y-=5
        pelota.style.top=`${y}px`;
      break;
    case 39:
        x+=5
        pelota.style.left=`${x}px`;
      break;
    case 40:
        y+=5
        pelota.style.top=`${y}px`;
      break;
  }
 // debugger;
}
