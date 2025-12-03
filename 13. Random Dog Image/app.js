let image = document.querySelector("img");
let button = document.querySelector("button");

button.addEventListener("click", ()=>{
let xhr = new XMLHttpRequest();

xhr.responseType = "json";

xhr.onload = ()=>{
console.log(xhr)
image.src = xhr.response.message;
}

xhr.open('GET',"https://dog.ceo/api/breeds/image/random");
xhr.send();

})