let casillas = [...document.getElementsByTagName("td")];
let contador = 0;

casillas.forEach(casilla => {
   casilla.addEventListener("mousedown", pintar); 
});

let combinacines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function pintar(evento) {   
    if (contador%2 === 0) {
        evento.target.style.backgroundColor = "grey";
        evento.target.innerHTML = "<img width='75' src='img/o.png'>";
    } else {
        evento.target.style.backgroundColor = "black";
        evento.target.innerHTML = "<img width='75' src='img/x.png'>";
    }
    contador++;
    if (contador == 9 || comprobarGanador()) {
        casillas.forEach(casilla => {
            casilla.style.backgroundColor = "white";
            casilla.innerHTML = "";
        });
        contador = 0;
    }
}

function comprobarGanador() {
    let ganador = false;
    let casillasOcupadasX = [];
    let casillasOcupadasY = [];
    for (let i = 0; i < casillas.length; i++) {
        if (casillas[i].style.backgroundColor == "black") {
            casillasOcupadasX.push(i);
        }
        if (casillas[i].style.backgroundColor == "grey") {
            casillasOcupadasY.push(i);
        }
    }

    combinacines.forEach(combinacion => {
        let coincide = 0;
        for (let i = 0; i < combinacion.length; i++) {
            for (let j = 0; j < casillasOcupadasX.length; j++) {
                if (casillasOcupadasX[j] === combinacion[i]) {
                    coincide++;
                }
            }
            if (coincide === 3) {
                alert("El jugador X ha ganado");
                ganador = true;
            }
        }
    });
    combinacines.forEach(combinacion => {
        let coincide = 0;
        for (let i = 0; i < combinacion.length; i++) {
            for (let j = 0; j < casillasOcupadasY.length; j++) {
                if (casillasOcupadasY[j] === combinacion[i]) {
                    coincide++;
                }
            }
            if (coincide === 3) {
                alert("El jugador 0 ha ganado");
                ganador = true;
            }
        }
    });
    return ganador;
}
