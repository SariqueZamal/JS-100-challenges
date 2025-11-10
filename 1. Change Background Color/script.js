let button = document.querySelector("button");

button.addEventListener("click", function () {
  let blue = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let red = Math.floor(Math.random() * 256);

  document.body.style.backgroundColor = `rgb(${blue},${green},${red})`;
});
