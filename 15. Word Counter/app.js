let textArea = document.querySelector("textarea");
let result = document.querySelector("p");

textArea.addEventListener("keypress", ()=> {
   let count = textArea.value.length;
   result.innerText = `Total word count is ${count}`; 
});

