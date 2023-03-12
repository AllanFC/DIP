let startbtn = document.getElementById("start");
let stopbtn = document.getElementById("stop");

let timer = document.getElementById("timer");

let days = 0;
let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let interval;

timer.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s " + milliseconds + "ms ";

startbtn.onclick = () => {
    interval = setInterval(() => {
        milliseconds++;
        if(milliseconds > 99){
            milliseconds = 0;
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

        timer.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s " + milliseconds + "ms ";
    }, 10);
}

stopbtn.onclick = () => {clearInterval(interval);}
