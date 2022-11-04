/*
Utilizando el formulario creado realizar el siguiente tratamiento

Recogida de datos
Al hacer click en el botón se recogerán los valores de los controles del formulario y se agregarán a un array de objetos.
Con los valores de los controles, crear un objeto mediante instanciación de una clase creada previamente.
Agregar el objeto a un array personas.

Validación
Solo se podrá instanciar el objeto si está activado el check de aceptar los términos de licencia
*/

let personas = [];

let terminos = document.getElementById("checkTerminos");



let person = {
    nombre : nom,
    apellido1 : apell1,
    apellido2 : apell2,
    edad : ed,
    email : em,
    carnet : [document.getElementById("carnets:checked").value],
    sexo : document.contenedor.sexo.value,
    estudios : document.getElementById("selEstudios").value
}

let boton = document.getElementById("btn1").addEventListener("click", function(){
    let nom = document.getElementById("nombre").value;
    let apell1 = document.getElementById("apel1").value;
    let apell2 = document.getElementById("apel2").value;
    let ed = document.getElementById("edad").value;
    let em = document.getElementById("email").value;
    let checks = []
    let checkBoxes = document.querySelector("#carnets").querySelectorAll("input[type=checkbox"]);
    console.log(checkBoxes);

    if (terminos.checked){
        
    }
});




/*
V2

Además de agregar el objeto al array se deberá mostrar en el div=visor un resumen del objeto  registrado
Se creará una tabla con el contenido registrado
Usar la propiedad innerHTML del objeto visor para crear la estructura

Nombre Apellido1 Apellido2
Sexo
Carnet  
Estudios

V3
Al pulsar el botón registrar  hacer una validación de los controles del formulario.
    Lo cuadros de texto no pueden estar vacíos. 
    La edad tiene que ser un valor numérico de máximo 3 cifras no inferior a 18.
    El mail tiene que cumplir un patrón de email.
    Sexo y Estudios deben haber sido seleccionados.
    El check de los términos debe estar seleccionado

Si algún campo no cumple los requisitos
    No se instancia el objeto
    Se muestran mensajes de error adecuado en el área del visor usar <p> para envolver los mensajes
Si todo es correcto
    Se borran los mensajes de error si los hubiera



*/
