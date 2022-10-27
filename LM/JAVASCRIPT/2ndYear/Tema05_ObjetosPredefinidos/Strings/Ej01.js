/*
A partir de las siguientes cadenas de texto javier,jose,pedro,luis realizar las operaciones oportunas para
generar las cadenas de Javier,Jose,Pedro,Luis.
*/

let name1 = "javier", name2 = "jose", name3 = "pedro", name4 = "luis";
let names = ["javier,jose,pedro,luis"];

function upperCase(name){
    return name.charAt(0).toUpperCase() + name.slice(1);
}

console.log(upperCase(name1));
console.log(upperCase(name2));
console.log(upperCase(name3));
console.log(upperCase(name4));

// name1 = name1.charAt(0).toUpperCase() + name1.slice(1);

