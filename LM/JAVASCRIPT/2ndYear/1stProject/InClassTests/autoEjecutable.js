//Función autoejecutable

let totalGeneral = (function suma(...datos){
let total = 0;
for (const dato of datos) {
    total += dato;
}
return (total);
})(1, 2, 3, 4)

(function() { //Tratamiento de la factura qque se usa en el totalGeneral
    //tratamiento de factura
    
})(totalGeneral);

