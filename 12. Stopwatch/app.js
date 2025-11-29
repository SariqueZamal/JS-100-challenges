let result = document.querySelector("p");
let start = document.querySelector("#start");
let reset = document.querySelector("#reset");

let min = "00";
let sec = "00";
let milliSec = 0;

start.addEventListener("click",()=>{
    setInterval(()=>{
        milliSec++;
        result.innerText =
    }, 100)
})