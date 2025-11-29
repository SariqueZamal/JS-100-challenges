let result = document.querySelector("p");
let start = document.querySelector("#start");
let reset = document.querySelector("#reset");
let isRunning = false;

let min = "0" + 0;
let sec = "0" + 0;
let milliSec = 0;

start.addEventListener("click", () => {
    start.innerText = "Stop";
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
