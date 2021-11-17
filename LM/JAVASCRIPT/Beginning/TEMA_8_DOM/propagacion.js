div1.addEventListener("click", accion, true)
div2.addEventListener("click", accion, true)
tabla.addEventListener("click", accion, true)
fila.addEventListener("click", accion, true)
celda1.addEventListener("click", accion, true)
celda2.addEventListener("click", accion, true)
celda3.addEventListener("click", accion, true)

function accion(evento) {
    visor.innerHTML+=`${evento.currentTarget.tagName}<br>`
    if(evento.currentTarget.tagName==="TABLE"){ // Se compara así, ya que los tagName se guardan en mayúscula
        evento.stopPropagation()
    }
}