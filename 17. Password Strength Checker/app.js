let password = document.querySelector("input");
let passwordStrength = document.querySelector("p");
let button = document.querySelector("button");

button.addEventListener("click", () => {
  let trimValue = password.value.trim();

  if (!trimValue) {
    passwordStrength.innerText = "Please enter password";
  } 
  else if (
    /[a-z]/.test(trimValue) &&
    /[A-Z]/.test(trimValue) &&
    /[0-9]/.test(trimValue) &&
    (trimValue.includes("@") ||
      trimValue.includes("#") ||
      trimValue.includes("$") ||
      trimValue.includes("&"))
  ) {
    passwordStrength.innerText = "Good Job!";
    return;
  } else {
    passwordStrength.innerText = "please enter a valid password";
    return;
  }
});
