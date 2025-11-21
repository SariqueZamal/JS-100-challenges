let input = document.querySelector("#number");
let button = document.querySelector("button");
let result = document.querySelector("#result");
let para = document.querySelector("p");

button.addEventListener("click", function () {
  let num = Number(input.value);
  if (Number.isNaN(num) || num == 0) {
    para.innerText = "Please enter a Valid Number";
    input.value = "";
    setInterval(() => {
      para.innerText = "";
    }, 1000);
    return;
  } else if (result.children.length == 0) {
    for (let i = 1; i <= 10; i++) {
      para.innerText += `${num}  x  ${i}  =  ${num * i}
  
          `;
    }
  } else {
    para.innerText = "";
    for (let i = 1; i <= 10; i++) {
      para.innerText += `${num}  x  ${i}  =  ${num * i}
  
          `;
    }
  }
  input.value = "";
  return;
});
