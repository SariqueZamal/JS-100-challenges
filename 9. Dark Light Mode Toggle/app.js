let one = document.querySelector("#one");
let two = document.querySelector("#two");
let nav = document.querySelector("nav");
let body = document.querySelector("body");
let solid1 = `<i id="one" class="fa-solid fa-toggle-on"></i>`;
let solid2 = `<i id="two" class="fa-solid fa-circle-half-stroke"></i>`;

let light1 = `<i id="one" class="fa-solid fa-toggle-off"></i>`;
let light2 = `<i id="two" class="fa-regular fa-moon"></i>`;

one.addEventListener("click", () => {
  if (one.className == "fa-solid fa-toggle-off") {
    nav.innerHTML = `<i id="one" class="fa-solid fa-toggle-on"></i>
    <i id="two" class="fa-solid fa-circle-half-stroke"></i>`;
    nav.style.backgroundColor = "white";
    nav.style.color = "black";
    body.style.backgroundColor = "black";
  }

});
