/*
A partir de las siguientes cadenas de texto javier,jose,pedro,luis realizar las operaciones oportunas para
generar las cadenas de Javier,Jose,Pedro,Luis.
*/

let name1 = "javier", name2 = "jose", name3 = "pedro", name4 = "luis";
let names = ["javier,jose,pedro,luis"];

name1.replace(name1.charAt(0), name1.charAt(0).toUpperCase());

console.log(name1);