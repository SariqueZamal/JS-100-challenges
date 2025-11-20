let mobile = document.querySelector("#mobile");
let button = document.querySelector("button");
let para = document.querySelector("p");

para.style.color = "red";

button.addEventListener("click", function () {
  let trimVal = mobile.value.trim();
  if (trimVal === "" || trimVal.length < 10 || trimVal.length > 10) {
    para.innerText = "Please enter valid 10 digits mobile Number";
    setTimeout(() => {
      para.innerText = "";
      mobile.value = "";
    }, 1000);
    return;
  }
  let mob = Number(mobile.value);

  if (mob === NaN) {
    para.innerText = "Please enter valid 10 digits mobile Number";
    setTimeout(() => {
      para.innerText = "";
      mobile.value = "";
    }, 1000);
    return;
  }

  let otp = "";
  for (let i = 0; i < 6; i++) {
    otp += Math.floor(Math.random() * 10);
  }

  para.innerText = `OTP is : ${otp}`;
  para.style.color = "violet";

  mobile.value = "";
  return;
});
