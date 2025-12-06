let input = document.querySelector("input");
let button = document.querySelector("button");
let para = document.querySelector("p");

button.addEventListener("click", ()=>{
    if(input.value.trim() ==""){
        para.style.color = "red";
        para.innerText = "Please enter the Password";
        return;
    }
    else if(input.type == "password"){
        input.type = "text";
        button.innerText = "Hide Password";
    }
    else{
        input.type = "password";
        button.innerText = "Show Password";
    }
})