let seconds = document.querySelector(".seg");
let minutes = document.querySelector(".min");
let hours = document.querySelector(".hour");

let intervalo = setInterval(function(){
    //Cronómetro

    let secs = Number(seconds.innerText);
    let mins = Number(minutes.innerText);
    let hs = Number(hours.innerText);
    
    secs++;
    secs = checkTime(secs);
    seconds.innerText = secs;
    
    if (secs === 60){
        secs = '00';
        seconds.innerText = secs;
        mins++;
        mins = checkTime(mins);
        minutes.innerText = mins;
        
    }
    
    if (mins === 60){
        mins = '00';
        minutes.innerText = mins;
        hs++;
        hs = checkTime(hs);
        hours.innerText = hs;
    }

    if (hs === 24){
        hs = '00';
        hs.innerText = hs;

    }

    function checkTime(i){
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    }


    //Reloj

    /*let date = new Date();
    var currSec = date.getSeconds();
    var currMins = date.getMinutes();
    var currHs = date.getHours();

    currSec = checkTime(currSec);
    currMins = checkTime(currMins);
    currHs = checkTime(currHs);
    
    seconds.innerText = currSec;
    minutes.innerText = currMins;
    hours.innerText = currHs;
    
    function checkTime(i){
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    }*/

},1000);