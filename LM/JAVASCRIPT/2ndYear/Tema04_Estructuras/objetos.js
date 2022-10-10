/*let numeros = [1, 2, 3, 4, 5],numeros2;
let dato1, dato2;
let persona = {
    iden: ["pepe", "lopez", "rodriguez"], //ARRAY
    edad: 20, //NUMBER
    direccion: { //OBJECT
        calle: "Villabañez s/n", 
        poblacion: "Valladolid",
        provincia: "Valladolid",
        cp: 47001
    },
    casado: true, //BOOLEAN
    nombreCompleto:function(){ //MÉTODO
        //nombreCompleto(){...} Notación alternativa para un método
        console.log(this.iden.toString())
    }
}

persona.estadoLaboral = "paro";
persona.metodoX = function(){
    //Tratamiento del método
}

for (const key in persona) {
        //const element = persona[key];
        console.log(`${key}=${persona[key]}`);
}

numeros2 = numeros;
dato1 = 5;
dato2= dato1;*/

let salarios = {
    "Juan": 100,
    "Pedro": 300,
    "Maria": 250
}

let salariosMatriz = Object.entries(salarios);
function sumarSalarios(salarios){
    let total = 0;
    for (const salario of Object.value) {
        
    }
}