let input = document.querySelector("input");
let button = document.querySelector("button");
let result = document.querySelector("p");

button.addEventListener("click", ()=>{
    let number = Number(input.value);
    if(Number.isNaN(number) || number == 0){
        result.innerText = "Please Enter a valid Number";
        setTimeout(() => {
            result.innerText = "";
        }, 1000);
    }

    let random = Math.floor(Math.random() * 100) 
    console.log(random)
})