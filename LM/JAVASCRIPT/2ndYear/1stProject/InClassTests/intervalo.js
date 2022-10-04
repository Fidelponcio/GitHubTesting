let parrafo = document.querySelector("p");
let intervalo = setInterval(function(){
    let contentParrafo = Number(parrafo.innerText);
    ++contentParrafo;
    parrafo.innerText = contentParrafo;
    if (contentParrafo === 10){
        clearInterval(intervalo);
    }
}, 1000);