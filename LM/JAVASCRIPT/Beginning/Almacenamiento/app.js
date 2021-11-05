let formulario={
    nombre:document.getElementById("nombre"),
    apel1:document.getElementById("apel1"),
    apel2:document.getElementById("apel2"),
    domicilio:document.getElementById("domicilio"),
    local:document.getElementById("local")
}

document.getElementById("btn1").onclick=function(){
    let identidad={
        nombre:formulario.nombre.value,
        apel1:formulario.apel1.value,
        apel2:formulario.apel2.value
    }

    localStorage.setItem("nombre", JSON.stringify(identidad))
    localStorage.setItem("domicilio", formulario.domicilio.value)
    localStorage.setItem("local", formulario.local.value)
}

document.getElementById("btn2").onclick=function(){
    let identidad= JSON.parse(localStorage.getItem("nombre")) //objeto
}