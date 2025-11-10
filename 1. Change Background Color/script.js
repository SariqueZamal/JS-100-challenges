let button = document.querySelector("button");

button.addEventListener("click",()=>{
    let blue = Math.random * 256;
    let green = Math.random * 256;
    let red = Math.random * 256;

    document.body.style.backgroundColor =  `rgb(${blue},${green},${red})`
});