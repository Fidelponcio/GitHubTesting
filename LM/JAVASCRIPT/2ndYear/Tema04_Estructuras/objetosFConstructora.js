function Persona (iden, edad, casado, direccion){
    this.iden= iden;
    this.edad = edad;
    this.casado = casado;
    this.direccion = direccion;
}

Persona.prototype.mostrar = function(){
    console.log(this.iden, this.casado, this.direccion, this.edad);
}

let persona1 = new Persona("pepe", 34, "si", "xxxxxxxxxxx");
persona1.mostrar();