let button = document.querySelector("button");
let result = document.querySelector("p");


button.addEventListener("click", ()=>{
    let xhr = new XMLHttpRequest();

    xhr.responseType = "json";

    xhr.onload = ()=>{
        result.innerText = xhr.response.setup;
        console.log(xhr.response);
    }

    xhr.open("GET", "https://v2.jokeapi.dev/joke/Any")
    xhr.send();
})