let startbtn = document.getElementById("start");
let stopbtn = document.getElementById("stop");

let timer = document.getElementById("timer");

let days = 0;
let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let interval;
let clock = 0;
let offset;

timer.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s 00" + milliseconds + "ms ";


startbtn.onclick = () => {
    if (!interval) {
        offset = Date.now();
        interval = setInterval(update, 1);
    }
}

stopbtn.onclick = () => {
    if(interval){
        clearInterval(interval);
        interval = null;
    }
}


function update() {
    milliseconds += delta();
    
    if(milliseconds > 100){
        timer.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s " + milliseconds + "ms ";
    } else {
        timer.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s 0" + milliseconds + "ms ";
    }
    
    if(milliseconds > 999){
        milliseconds = 0;
        timer.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s 00" + milliseconds + "ms ";
        seconds++;
    }

    if(seconds > 59){
        seconds = 0;
        minutes++;
    }

    if(minutes > 59){
        minutes = 0;
        hours++;
    }

    if(hours > 23){
        hours = 0;
        days++;
    }
  }

function delta() {
    var now = Date.now(),
        d = now - offset;

    offset = now;
    return d;
}


