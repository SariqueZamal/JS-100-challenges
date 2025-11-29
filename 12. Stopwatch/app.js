let result = document.querySelector("p");
let start = document.querySelector("#start");
let reset = document.querySelector("#reset");
let stop = document.querySelector("#stop");
let lap = document.querySelector("#lap")
// let isRunning = false;

let min = "0" + 0;
let sec = "0" + 0;
let milliSec = 0;

start.addEventListener("click", () => {
start.style.visibility =  "hidden";
stop.style.visibility = "visible";
  setInterval(() => {
    milliSec++;
    if (milliSec < 10) {
      milliSec = "0" + milliSec;
    } 
    else if(milliSec == 100){
        sec++;
        if(sec < 10){
            sec = "0" + sec;
        }
        milliSec = milliSec - 100;
    }
    else if(sec == 60){
        min++;
        if(min < 10){
            min = "0" + min;
        }
        sec = sec - 60;
    }
    result.innerText = `${min}:${sec}:${milliSec}`;
  }, 10);
});

stop.addEventListener("click", ()=>{
    stop.style.visibility = "hidden";
    start.style.visibility = "visible";
})
