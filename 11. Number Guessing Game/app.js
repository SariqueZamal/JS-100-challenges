let input = document.querySelector("input");
let button = document.querySelector("button");
let result = document.querySelector("p");

button.addEventListener("click", () => {
  // Convert text into Number.
  let number = Number(input.value);

  // Checking if Not a Number & number is zero
  if (Number.isNaN(number) || number == 0) {
    result.style.color = "red";
    result.innerText = "Please Enter a valid Number";
    input.value = "";

    setTimeout(() => {
      result.innerText = "";
    }, 1000);
    return;
  }

  // Generating random number between 1 to 100.
  let random = Math.floor(Math.random() * 100);

  // Check the random number with the user input.
  if (number == random) {
    input.value = "";
    result.style.color = "green";
    result.innerText = "You Entered the correct answer";
    return;
  } else {
    input.value = "";
    result.style.color = "blue";
    result.innerText = `You entered the wrong anwer.
        Correct ans is ${random}.`;
  }
});
