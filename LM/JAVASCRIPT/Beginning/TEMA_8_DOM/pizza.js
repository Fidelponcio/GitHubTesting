// Capturar valores de radiobutton
let tamano= document.pedido.tamano.value;

//Capturar valores de checkboxes
let checkboxes= [...document.querySelectorAll("input[type=checkbox]")];
let checkVals= [];
checkboxes.forEach(check => {
    if (check.checked){
        checkVals.push(check.value);
    }
});

debugger