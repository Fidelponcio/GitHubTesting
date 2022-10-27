/* 

Identificar el número de palabras existentes en la siguiente frase:"por cien cañones por banda poema de
Espronceda".

*/

let frase = "por cien cañones por banda poema de Espronceda";

console.log(frase.length);
console.log(frase.replace(/\s+/g, "").length);