let result = document.querySelector("p");
let startStop = document.querySelector("#startStop");
let reset = document.querySelector("#reset");
let lap = document.querySelector("#lap");
let lapContainer = document.querySelector(".lapContainer");
let isRunning = false;
let isLap = false;

let min = "0" + 0;
let sec = "0" + 0;
let milliSec = 0;

let updateTime;

let lapM = "0" + 0;
let lapS = "0" + 0;
let lapMilli = "0" + 0;

let lapUpdateTime;

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
      if (isLap) {
        // lapUpdateTime();
        lapContainer.childNodes[lapCount - 1].innerHTML = `${lapCount} </br>
      ${lapM}:${lapS}.${lapMilli}
      ${min}:${sec}.${milliSec}
      `;
      }
    }, 10);
  } else {
    isRunning = false;
    startStop.innerText = "Start";
    lap.style.visibility = "hidden";
    clearInterval(updateTime, 1000);
    clearInterval(lapUpdateTime, 1000);
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
  clearInterval(lapUpdateTime, 1000);
  isLap = false;
  return;
});

let lapCount = 0;

lap.addEventListener("click", () => {
  isLap = true;
  if (lapCount === 0) {
    lapCount++;
    let lapContent1 = document.createElement("div");
    lapContent1.classList.add("lapContent");

    let lapMin = min;
    let lapSec = sec;
    let lapMilliSec = milliSec;

    lapContent1.innerHTML = `1 </br>
    ${lapMin}:${lapSec}.${lapMilliSec}</br>
    ${lapMin}:${lapSec}.${lapMilliSec}
    `;
    lapContainer.append(lapContent1);

    lapCount++;
    let lapContent2 = document.createElement("div");
    lapContent2.classList.add("lapContent");
    lapContent2.id = `${lapCount}`;

    lapUpdateTime = setInterval(() => {
      lapMilli++;
      if (lapMilli < 10) {
        lapMilli = "0" + lapMilli;
      } else if (lapMilli == 100) {
        lapS++;
        if (lapS < 10) {
          lapS = "0" + lapS;
        }
        lapMilli = lapMilli - 100;
      } else if (lapS == 60) {
        lapM++;
        if (lapM < 10) {
          lapM = "0" + lapM;
        }
        lapS = lapS - 60;
      }
      lapContent2.innerHTML = `${lapCount} </br>
      ${lapM}:${lapS}.${lapMilli}
      ${min}:${sec}.${milliSec}
      `;
    }, 10);

    lapContainer.append(lapContent2);
  } else {
    lapContainer.childNodes[lapCount - 1];
    lapCount++;
    let lapContent = document.createElement("div");
    lapContent.classList.add("lapContent");
  }
});
