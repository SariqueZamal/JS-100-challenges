let input = document.querySelector("#number");
let button = document.querySelector("button");
let para = document.querySelector("p");

button.addEventListener("click", function () {
  let num = Number(input.value);
  if (num != Number || num == 0) {
    para.innerText = "Please enter a Valid Number";
    input.value = "";
    setInterval(() => {
      para.innerText = "";
    }, 1000);
    return;
  }
  //   } else {
  //     for (let i = 1; i <= 10; i++) {
  //       para.innerText += `${num}  x  ${i}  =  ${num * i}

  //       `;
  //     }
  //   }
});
