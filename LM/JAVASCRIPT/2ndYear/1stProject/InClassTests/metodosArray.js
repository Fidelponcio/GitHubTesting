let datos = [1, 2, 3, 4, 5, 6, 10];

//Ejemplo forEach()
/*datos.forEach(function(dato, index, array){
    console.log(dato ** 2);
})*/

//Ejemplo every()
/*let respuesta1 = datos.every(function(dato){
    return dato < 10;
});
if (respuesta1){
    console.log(datos, "Todos los elementos del array son menores que 10");
} else {
    console.log(datos, "Algún elemento no es menor que 10");
}*/

//Ejemplo de some
/*let respuesta2 = dato.some(function(dato){
    return dato % 2 != 0;
});
if (respuesta2){
    console.log("Hay algún número impar");
} else {
    console.log("No hay números impares");
}*/

//Ejemplo de filter
let pares = datos.filter(function(dato){
    return dato % 2 === 0;
});
console.log(`Los pares de la muestra son ${pares.toString()}`);