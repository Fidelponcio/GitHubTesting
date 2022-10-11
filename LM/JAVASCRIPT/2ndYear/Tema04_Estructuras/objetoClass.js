class Persona {
    constructor(iden, edad, casado, direccion){
        this.iden= iden;
        this.edad = edad;
        this.casado = casado;
        this.direccion = direccion;
    }
    mostrar(){
        console.log(this.iden, this.casado, this.direccion, this.edad);
    }
}

let persona1 = new Persona("pepe", 34, "si", "xxxxxxxxxxx");
persona1.mostrar();