let text = document.querySelector("textarea");
let result = document.querySelector("p");

text.addEventListener("keypress", (event) => {
  let count = text.value.length;
  result.innerText = `Total letters are ${count}`;
});

text.addEventListener("keydown", (event) => {
  let count;
  if (event.key === "Backspace") {
    count = text.value.length;
  } else if (event.key === "Delete") {
    count = text.value.length;
  } else {
    count = text.value.length;
  }
  result.innerText = `Total letters are ${count}`;
});
