let agenda={
    nombre:document.getElementById("nombre"),
    cnp:document.getElementById("cnp"),
    poblacion:document.getElementById("poblacion"),
    provincia:document.getElementById("provincia"),
    movil:document.getElementById("movil"),
    casa:document.getElementById("casa"),
    trabajo:document.getElementById("trabajo")
}

document.getElementById("btn1").onclick=function(){
    
    let dato= {
        direccion:{
            cnp:agenda.cnp.value,
            poblacion:agenda.poblacion.value,
            provincia:agenda.provincia.value
        },
        /*telefonos:{
            movil:agenda.movil.value,
            casa: agenda.casa.value,
            trabajo:agenda.trabajo.value
        }*/
        telefonos:[
            agenda.movil.value,
            agenda.casa.value,
            agenda.trabajo.value
        ]
    }

    localStorage.setItem(agenda.nombre.value, JSON.stringify(dato));
}

document.getElementById("btn2").onclick=function(){
    let datoFound = JSON.parse(localStorage.getItem(agenda.nombre.value));
    let cadena= `<p>Nombre: ${agenda.nombre.value}</p>`;

    cadena+= `<p>Calle, nº, piso: ${datoFound.direccion.cnp}</p>`;
    cadena+= `<p>Población: ${datoFound.direccion.poblacion}</p>`;
    cadena+= `<p>Provincia: ${datoFound.direccion.provincia}</p>`;

    cadena+= `<p>Móvil: ${datoFound.telefonos[0]}</p>`;
    cadena+= `<p>Casa: ${datoFound.telefonos[1]}</p>`;
    cadena+= `<p>Trabajo: ${datoFound.telefonos[2]}</p>`;
    
    document.getElementById("buscado").innerHTML= cadena;
    
}