let input = document.querySelector("input");
let button = document.querySelector("button");

button.addEventListener("click", ()=>{
    if(input.type == "password"){
        input.type = "text";
        button.innerText = "Hide Password";
    }
    else{
        input.type = "password";
        button.innerText = "Show Password";
    }
})