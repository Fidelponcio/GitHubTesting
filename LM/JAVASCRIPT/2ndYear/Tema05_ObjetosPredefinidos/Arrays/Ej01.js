/*
Partiendo del siguiente array [1,5,2,7,3,2,4,5,8,7,3,4,5,6,7,3,8,4,1] crear uno nuevo ordenado en el que no
haya elementos repetidos y estén ordenados.
*/

let array = [1,5,2,7,3,2,4,5,8,7,3,4,5,6,7,3,8,4,1];

let newArr = [...new Set(array)];

// https://stackoverflow.com/questions/1063007/how-to-sort-an-array-of-integers-correctly
newArr.sort(function(a, b){return a-b});

console.log(typeof(newArr));

/*newArr.sort(function(a, b){
    if (a < b){
        return -1;
    }
})*/

console.log(array);
console.log(newArr);