let input = document.querySelector("#number");
let button = document.querySelector("button");
let para = document.querySelector("p");

button.addEventListener("click", function () {
  let num = Number(input.value);
    
  if (num == NaN || num == 0) {
    para.innerText = "Please enter a Valid Number";
    return;
  }
});
