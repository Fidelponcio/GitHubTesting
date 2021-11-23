document.getElementById('player').addEventListener("mouseover", sumarPuntos);

tiempo=60;
puntos=0;
necesarios=30;
function sumarPuntos() {
    puntos++;
    document.getElementById("puntos").innerHTML= "Puntuación: <b>" + puntos + "/" + necesarios + "<br>";
    randNum = Math.round(Math.random()*500);
    randNum2 = Math.round(Math.random()*500);
    document.getElementById("player").style.marginTop = randNum + "px";
    document.getElementById("player").style.marginLeft = randNum2 + "px";
        if(puntos == 30) {
            alert("Has ganado");
        }
}

function restarTiempo() {
    tiempo--;
    document.getElementById("tiempo").innerHTML = "&nbsp;Tiempo "+tiempo;
        if(tiempo == 0) {
            alert("Has perdido")
            tiempo=0;
            puntos=0;
        }
}

setInterval(restarTiempo,1000);