let date = document.querySelector("#date");
let button = document.querySelector("button");
let para = document.querySelector("p");

button.addEventListener("click", function () {
  let currDate = new Date();

  if (
    date.valueAsDate == null ||
    date.valueAsDate > currDate ||
    date.valueAsDate.getFullYear() < 1900
  ) {
    para.innerText = "please put the valid Date.";
    return;
  }

  console.dir(date.valueAsDate);
  console.dir(date);
  console.log(date.valueAsDate.getFullYear());
});
