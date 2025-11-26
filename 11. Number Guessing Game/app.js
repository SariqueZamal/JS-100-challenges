let input = document.querySelector("input");
let button = document.querySelector("button");
let result = document.querySelector("p");

button.addEventListener("click", ()=>{
    let number = Number(input.value);

    if(Number.isNaN(number) || number == 0){
        result.style.color = "red";
        result.innerText = "Please Enter a valid Number";
        input.value = "";

        setTimeout(() => {
            result.innerText = "";
        }, 1000);
        return;
    }

    let random = Math.floor(Math.random() * 100) 

    if(number == random){
        input.value = "";
        result.style.color = "green";
        result.innerText = "You Entered the correct answer";
        return;
    }else{
        input.value = "";
        result.style.color = "blue";
        result.innerText = `You entered the wrong anwer.
        Correct ans is ${random}.`
    }
    
})