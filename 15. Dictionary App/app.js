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

    let word = xhr.response[0].word;
    let audio = xhr.response[0].phonetics[0].audio || "";
    let definitions = xhr.response[0].meanings[0].definitions;
    let defContent = "";
    let synonyms = xhr.response[0].meanings[0].synonyms;
    let allSynonyms = "";

    if(synonyms.length == 0){
      allSynonyms = "Not Available";
    }

    for (let i = 0; i < definitions.length; i++) {
      defContent = `${defContent + definitions[i].definition}<br>`;
    }

    for (let i = 0; i < synonyms.length; i++) {
      allSynonyms = `${allSynonyms + synonyms[i]}<br>`;
    }

    result.innerHTML = `<h4>Word: ${word}</h4><br>
    <audio controls>
    <source src="${audio}" type="audio/mp3">
    Your browser does not support the audio element.
    </audio><br><br>
    <h4>Meaning:-</h4><br>
    <p>${defContent}</p><br>
    <h4>Synonym:-</h4>
    <p>${allSynonyms}</p>
    `;
  };

  xhr.open("GET", `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
  xhr.send();
}
