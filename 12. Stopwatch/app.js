let result = document.querySelector("p");
let startStop = document.querySelector("#startStop");
let reset = document.querySelector("#reset");
let lap = document.querySelector("#lap");
let lapContainer = document.querySelector(".lapContainer");
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
      result.innerText = `${min}:${sec}.${milliSec}`;
    }, 10);
  } else {
    isRunning = false;
    startStop.innerText = "Start";
    lap.style.visibility = "hidden";
    clearInterval(updateTime, 1000);
    return;
  }
});

reset.addEventListener("click", () => {
  result.innerText = `00:00.00`;
  isRunning = false;
  reset.style.visibility = "hidden";
  startStop.innerText = "Start";
  lap.style.visibility = "hidden";
  clearInterval(updateTime, 1000);
  return;
});


let lapCount = 0;
lap.addEventListener("click", () => {
  if (lapCount === 0) {
    lapCount = 2;
    let lapContent1 = document.createElement("div");
    lapContent1.classList.add("lapContent");
    let lapContent2 = document.createElement("div");
    let lapMin = min;
    let lapSec = sec;
    let lapMilliSec = milliSec;

    lapContent1.innerHTML =`1 </br>
    ${lapMin}:${lapSec}.${lapMilliSec}</br>
    ${lapMin}:${lapSec}.${lapMilliSec}
    `;
    lapContainer.append(lapContent1);
  }
});
