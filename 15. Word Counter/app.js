let textArea = document.querySelector("textarea");
let result = document.querySelector("p");

textArea.addEventListener("keypress", (event) => {
  let count = textArea.value.length;
  result.innerText = `Total word count is ${count}`;
});

textArea.addEventListener("keydown", (event) => {
  let count;
  if (event.key === "Backspace") {
    count = textArea.value.length;
  } else if (event.key === "Delete") {
    count = textArea.value.length;
  } else {
    count = textArea.value.length;
  }
  result.innerText = `Total word count is ${count}`;
});
