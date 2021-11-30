
ok.addEventListener("click", function(){
    
    // Capturar valores de radiobutton
    let tamano= document.pedido.tamano.value;
    console.log(tamano);
    //Captura de cada radio individual
    let radios= [...document.querySelectorAll("input[type=radio]")];
    let checkVals=[];
    
    radios.forEach(radio=>{
        radio.checked=false; //Ponemos todos los radios a false
        console.log(radio.value);
    })
    
    //Capturar valores de checkboxes
    let checkboxes= [...document.querySelectorAll("input[type=checkbox]")];
    
    checkboxes.forEach(check => {
        if (check.checked){
            checkVals.push(check.value); //Metemos los value de los checkbox en un array

        }
    });
    console.log(checkVals.toString());
    
    //Capturar los elementos seleccionados de la lista de selección múltiple
    let tiposPizza=[...tipos.selectedOptions].forEach(elemLista=>{
        console.log(elemLista.value);
    });
    
    // debugger;

})

//1er ejercicio - select de comunidades y select de provincias dinámico
//2º ejercicio - Visor de colores, tres controles RGB
//3er ejercicio - Barra de progreso con setInterval
