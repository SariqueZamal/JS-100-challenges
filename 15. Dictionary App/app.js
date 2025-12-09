let input = document.querySelector("input");
let button = document.querySelector("button");
let result = document.querySelector("#result");

button.addEventListener("click", () => {
  let word = input.value.trim();
  if (word === "") {
    result.innerHTML = `<p id="error">Please enter a word.</p>`;
    setTimeout(() => {
      result.innerHTML = "";
    }, 1000);
    return;
  }
  getMeaning(word);
});

function getMeaning(word) {
  let xhr = new XMLHttpRequest();
  xhr.responseType = "json";

  result.innerHTML = `Loading. . .`;

  xhr.onload = () => {
    if (xhr.response.title == "No Definitions Found") {
      result.innerHTML = `<p id="error">Sorry Dude, we couldn't find definitions for the word you were looking for.</p>`;
      return;
    }

    result.innerHTML = `<h4>Word: ${xhr.response[0].word}</h4><br>
    <h4>Meaning:</h4>
    <p>${xhr.response[0].meanings[0].definitions[0].definition}</p>
    `;
    
    console.log(xhr.response[0]);
    console.log(xhr.response[0].word);
    console.log(xhr.response[0].meanings[0].definitions[0].definition);
  };

  xhr.open("GET", `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
  xhr.send();
}
