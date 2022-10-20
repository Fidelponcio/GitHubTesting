/*
Partiendo del mismo array que el ejercicio anterior, mostrar en que posiciones se encuentra el número 3 sin
necesidad de recorrer todas los elementos del array.
*/

let array = [1,5,2,7,3,2,4,5,8,7,3,4,5,6,7,3,8,4,1];
let indices = [];
let i = -1;

//Con loop while con indexOf
while((i = array.indexOf(3, i+1)) != -1){
    indices.push(i);
}


//Con loop for sin indexOf
/*for (let index = 0; index < array.length; index++) {
    if (array[index] === 3){
        indices.push(index);
    }
}*/

console.log(indices);