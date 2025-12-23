let password = document.querySelector("input");
let passwordStrength = document.querySelector("p");
let button = document.querySelector("button");

button.addEventListener("click", () => {
  let trimValue = password.value.trim();
  console.log(trimValue.length);

  if (!trimValue) {
    passwordStrength.innerText = "Please enter a password. . .";
    password.value = "";
    return;
  } else if (
    /[a-z]/.test(trimValue) &&
    /[A-Z]/.test(trimValue) &&
    /[0-9]/.test(trimValue) &&
    trimValue.length >= 8 &&
    (trimValue.includes("@") ||
      trimValue.includes("#") ||
      trimValue.includes("$") ||
      trimValue.includes("&"))
  ) {
    passwordStrength.innerText = `Good Job!
    This is a valid password. . .
    `;
    return;
  } else {
    passwordStrength.innerText = `Your password is weak!
    - It should contain one Uppercase Letter, one Lowercase letter, one Number & one Special Character.
    - Allowable Special Character @, #, $ and &.
    - Password must have 8 characters.
    `;
    return;
  }
});
