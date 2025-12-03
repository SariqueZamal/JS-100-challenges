let image = document.querySelector("img");
let button = document.querySelector("button");

button.addEventListener("click", ()=>{
let xhr = new XMLHttpRequest();

xhr.responseType = "JSON";
xhr.onload = ()=>{

}

xhr.open('GET',"");
xhr.send();

})