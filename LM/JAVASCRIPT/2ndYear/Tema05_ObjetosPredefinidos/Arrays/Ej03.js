/*
Partiendo del mismo array ordenar sus elementos de forma que los pares ocupen las primeras posiciones.
*/

let array = [1,5,2,7,3,2,4,5,8,7,3,4,5,6,7,3,8,4,1];

// array = [...new Set(array)];
array.sort(function(a, b){return a-b});

console.log(array);

//Dividimos los números en pares e impares y después los añadimos a otro array con concat
let arrPar = [], arrImpar = [];

for (let index = 0; index < array.length; index++) {
    if (array[index]%2){
        arrImpar.push(array[index]);
    } else {
        arrPar.push(array[index]);
    }
}

let arrOrdenado = arrPar.concat(arrImpar);

console.log(arrOrdenado);

