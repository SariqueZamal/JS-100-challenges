let input = document.querySelector("input");
let button = document.querySelector("button");
let result = document.querySelector("#result");

button.addEventListener("click", () => {
  let word = input.value.trim();
  if (word === "") {
    result.innerHTML = `<p id="error">Please enter a word.</p>`;
    setTimeout(() => {
      result.innerHTML = "";
    }, 1000);
    return;
  }
});
