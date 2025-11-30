let result = document.querySelector("p");
let startStop = document.querySelector("#startStop");
let reset = document.querySelector("#reset");
let lap = document.querySelector("#lap");
let isRunning = false;

let min = "0" + 0;
let sec = "0" + 0;
let milliSec = 0;

let updateTime;

startStop.addEventListener("click", () => {
  if (!isRunning) {
    isRunning = true;
    startStop.innerText = "Stop";
    reset.style.visibility = "visible";
    lap.style.visibility = "visible";
    updateTime = setInterval(() => {
      milliSec++;
      if (milliSec < 10) {
        milliSec = "0" + milliSec;
      } else if (milliSec == 100) {
        sec++;
        if (sec < 10) {
          sec = "0" + sec;
        }
        milliSec = milliSec - 100;
      } else if (sec == 60) {
        min++;
        if (min < 10) {
          min = "0" + min;
        }
        sec = sec - 60;
      }
      result.innerText = `${min}:${sec}:${milliSec}`;
    }, 10);
  } else {
    isRunning = false;
    startStop.innerText = "Start";
    lap.style.visibility = "hidden";
    clearInterval(updateTime, 1000);
    return;
  }
});
