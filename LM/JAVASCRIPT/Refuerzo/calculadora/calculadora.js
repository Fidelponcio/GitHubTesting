//Guardamos la referencia a nuestro elemento "display"
let display = document.getElementById('display');

//Guardamos las referencias a los botones
//La función "document.getElementsByClassName()" devuelve una NodeCollection, 
//por lo que usamos "Array.from()" para transformarlo a Array
let buttons = Array.from(document.getElementsByClassName('button'));

//Añadimos eventListeners a los botones y sus funcionalidades

buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            //Limpiamos el display
            case 'C':
                display.innerText = '';
                break;
            case '=':
                //Capturamos una excepción, en caso de que la función "eval()"
                //de un resultado erróneo, sino, calcula la operación como si
                //fuera un script
                try{
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = "Error"
                }
                break;
            default:
                display.innerText += e.target.innerText;
        }
    });
});