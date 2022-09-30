function suma(){
    let total= 0;
    suma.arguments;
    
    // for (dato of suma.arguments) {
    //     total+=dato;
    // }

    let datos = [...suma.arguments]; //para transformar la Collection a Array  ...
    for (let index = 0; index < datos.length; index++) {
        total+=suma.arguments[index];
        
    }
    console.log(total);
    console.log(suma.arguments,
         + " Arguments es instancia de Array?= " instanceof Array);
}

suma(1, 2, 3, 4, 5);
suma(134, 53, 53, 565);
