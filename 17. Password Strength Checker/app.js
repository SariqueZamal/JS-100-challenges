let password = document.querySelector("input");
let passwordStrength = document.querySelector("p");
let button = document.querySelector("button");

button.addEventListener("click", () => {
  let trimValue = password.value.trim();

  if (!trimValue) {
    password.value = "";
    passwordStrength.innerText = "Please enter a password. . .";
    return;
  } 
  else if (
    /[a-z]/.test(trimValue) &&
    /[A-Z]/.test(trimValue) &&
    /[0-9]/.test(trimValue) &&
    trimValue.length >= 8 &&
    (trimValue.includes("@") ||
      trimValue.includes("#") ||
      trimValue.includes("$") ||
      trimValue.includes("&"))
  ) {
    password.value = "";
    passwordStrength.innerText = `Good Job!

    Your password is ${trimValue}
    `;
    return;
  } else {
    password.value = "";
    passwordStrength.innerText = `Your password is weak!

    Your entered "${trimValue}"

    - It should contain one Uppercase Letter, one Lowercase letter, one Number & one Special Character.
    - Allowable Special Character @, #, $ and &.
    - Password must have 8 characters.
    `;
    return;
  }
});
