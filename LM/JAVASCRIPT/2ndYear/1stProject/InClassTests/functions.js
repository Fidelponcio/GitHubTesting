

let persona = {
    nombre : 'Pepe',
    apellido : 'Alonso',
    nCompleto : function(){
        return `${this.nombre} ${this.apellido}`
    },
    
    verNomCompleto : function(){
        setTimeout(() =>{
            console.log(this);
            console.log(this.nCompleto())
        },3000)
    }
}
    
persona.verNomCompleto();

document.querySelector("button").onclick=()=>{
    console.log(this);
    alert(this.innerText);
}