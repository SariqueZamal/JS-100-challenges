let markSecured = document.querySelector("#markSec");
let totalMark = document.querySelector("#totalMark");
let result = document.querySelector("p");
let button = document.querySelector("button");

button.addEventListener("click", ()=>{
    let markSec = Number(markSecured);
    let total = Number(totalMark);

    if(Number.isNaN(markSec) || Number.isNaN(total) || markSec == 0 || total == 0){

    }
})