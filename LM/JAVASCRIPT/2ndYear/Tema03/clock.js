let seconds = document.querySelector(".seg");
let minutes = document.querySelector(".min");
let hours = document.querySelector(".hour");

let intervalo = setInterval(function(){
    let secs = Number(seconds.innerText);
    let mins = Number(minutes.innerText);
    let hs = Number(hours.innerText);

    secs++;
    seconds.innerText = secs;
    
    if (secs.length == 1){
        secs = '0' + secs;
        
    }
    console.log(secs.length);
    
    if (secs === 60){
        secs = 0;
        seconds.innerText = secs;
        mins++;
        minutes.innerText = mins;

    }
    

    if (mins === 60){
        mins = 0;
        minutes.innerText = mins;
        hs++;
        hours.innerText = hs;
    }

    if (hs === 24){
        hs = 0;
        hs.innerText = hs;

    }

},250);