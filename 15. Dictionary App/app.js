let input = document.querySelector("input");
let button = document.querySelector("button");
let result = document.querySelector("#result");

button.addEventListener("click", ()=>{
    if(input.value.trim() === ""){
        result.innerHTML = `<p id="error">Please enter a word.</p>`;
        return;
    }
})