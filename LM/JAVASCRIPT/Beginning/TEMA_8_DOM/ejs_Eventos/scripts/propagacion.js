div1.addEventListener("click", accion)
div2.addEventListener("click", accion)
tabla.addEventListener("click", accion)
fila.addEventListener("click", accion)
celda1.addEventListener("click", accion)
celda2.addEventListener("click", accion)
celda3.addEventListener("click", accion)

function accion(evento){
    visor.innerHTML+=`${evento.currentTarget.tagName}<br>`
    if(evento.currentTarget.tagName==="TABLE"){
        evento.stopPropagation()
    }
}