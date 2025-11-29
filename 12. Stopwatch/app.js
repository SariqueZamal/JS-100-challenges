let result = document.querySelector("p");
let start = document.querySelector("#start");
let reset = document.querySelector("#reset");

let min = "0"+0;
let sec = "0"+0;
let milliSec = 0;

start.addEventListener("click", () => {
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
    result.innerText = `${min}:${sec}:${milliSec}`;
    //   if (milliSec < 100) {
    //   } else if ((milliSec >= 100) & (sec < 60)) {
    //   }
  }, 10);
});
