let expenses = document.querySelector("#expenses");
let people = document.querySelector("#people");
let button = document.querySelector("button");
let result = document.querySelector("p");

button.addEventListener("click", () => {
  let expense = expenses.value;
  let person = people.value;

  if (!expense || !person || expense <= 0 || person <= 0) {
    result.style.color = "red";
    result.innerText = "Please enter a valid input. . .";

    setTimeout(() => {
      result.innerText = "";
    }, 1000);
  }

  let tipsPerPerson = Math.round(expense / person);
  let tipsForLastPerson = expense - tipsPerPerson * (person - 1);

  if(tipsPerPerson === tipsForLastPerson){

    result.innerText = `Tips per person is ${tipsPerPerson}`;
  }
});
