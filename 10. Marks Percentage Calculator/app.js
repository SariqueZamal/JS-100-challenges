let markSecured = document.querySelector("#markSec");
let totalMark = document.querySelector("#totalMark");
let result = document.querySelector("p");
let button = document.querySelector("button");

button.addEventListener("click", () => {
  let markSec = Number(markSecured.value);
  let total = Number(totalMark.value);

  if (
    Number.isNaN(markSec) ||
    Number.isNaN(total) ||
    markSec == 0 ||
    total == 0
  ) {
    result.innerText = "Please enter a valid Number.";

    setTimeout(() => {
      result.style.color = "red";
      result.innerText = "";
    }, 1000);
    return;
  }

  let percentage = (100 / total) * markSec;
  result.style.color = "green";
  result.innerText = percentage.toFixed(2);

  setTimeout(() => {
    result.innerText = "";
  }, 2000);
  return;
});
