let button = document.querySelector("button");
let p = document.querySelector("p");

button.addEventListener("click", function () {
  let blue = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let red = Math.floor(Math.random() * 256);

  p.innerText = `Color Code: rgb(${blue},${green},${red})`
  document.body.style.backgroundColor = `rgb(${blue},${green},${red})`;
});
