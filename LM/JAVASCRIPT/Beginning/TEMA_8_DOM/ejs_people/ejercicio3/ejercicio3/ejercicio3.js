let seleccion =[tituloFutbol, tituloBasket, tituloTenis, tituloRugby];
let posicion = 0;

document.addEventListener("keydown", muevoBola);
document.addEventListener("keydown", codigo);

function codigo (e) {
    let cod = e.keyCode;

    //37 flecha izquierda
    if (cod === 37 && posicion > 0){
        posicion--;
    } else if (cod === 37 && posicion === 0){
        posicion = (seleccion.length-1);
    } 
    //39 flecha derecha
    if (cod === 39 && posicion < 3) {
        posicion++;
    }else if(cod === 39 && posicion === (seleccion.length-1)){
        posicion = 0;
    }

    //console.log(posicion);
    switch (posicion){
        case 0:
            seleccion [3].style.backgroundColor = 'white';
            seleccion [0].style.backgroundColor = 'yellow';
            seleccion [1].style.backgroundColor = 'white';
        break;
        case 1:
            seleccion [0].style.backgroundColor = 'white';
            seleccion [1].style.backgroundColor = 'yellow';
            seleccion [2].style.backgroundColor = 'white';
        break;
        case 2:
            seleccion [1].style.backgroundColor = 'white';
            seleccion [2].style.backgroundColor = 'yellow';
            seleccion [3].style.backgroundColor = 'white';
        break;
        case 3:
            seleccion [2].style.backgroundColor = 'white';
            seleccion [3].style.backgroundColor = 'yellow';
            seleccion [0].style.backgroundColor = 'white';
        break;
    }
} //fin function codigo

function muevoBola(e) {
    let cod = e.keyCode; //devuelve el código del código

        if(cod === 13 && posicion === 0){
            empezar(imgFutbol);
        } else if(cod === 13 && posicion === 1){
            empezar(imgBasket);
        } else if (cod === 13 && posicion === 2){
            empezar(imgTenis);
        } else if (cod === 13 && posicion === 3){
            empezar(imgRugby);
        } 
}

function empezar(img){
    let y = img.offsetTop;
    intervalo = setInterval(
        function () 
        {
            y += 15;
            img.style.top = `${y}px`;
            if (y >= 300)
            {
                y = img.offsetTop;
                clearInterval(intervalo);
            }
        }
        ,10);
}
