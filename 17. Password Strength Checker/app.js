let password = document.querySelector("input");
let passwordStrength = document.querySelector("p");
let button = document.querySelector("button");

let uppercase = false;
let lowercase = false;
let number = false;
let specialChar = false;

button.addEventListener("click", () => {
  let trimValue = password.value.trim();

  if (
    /[a-z]/.test(trimValue) &&
    /[A-Z]/.test(trimValue) &&
    /[0-9]/.test(trimValue) &&
    (trimValue.includes("@") ||
      trimValue.includes("#") ||
      trimValue.includes("$") ||
      trimValue.includes("&"))
  ) {
    lowercase = true;
    uppercase = true;
    number = true;
    specialChar = true;
    passwordStrength.innerText = "Good Job!";
    return;
  } else {
    passwordStrength.innerText = "please enter a valid password";
    return;
  }
});
