function funcionAsincrona(mensaje){
    console.log(mensaje);
}

let timer5 = setTimeout(funcionAsincrona, 5000, "Qué creisis 5 segundos");
let timer2 = setTimeout(funcionAsincrona, 2000, "Qué creisis 2 segundos");

/*setTimeout(function(mensaje, par2){
    console.log(mensaje, par2);
}, 5000, "Qué creisis 5 segundos", "Par2");*/

console.log("Esto aparece antes o después de 5 segundos");

setTimeout(function(){
    //Forzamos la parada del timer5
    clearInterval(timer5);
}, 2000);