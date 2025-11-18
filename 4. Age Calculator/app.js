let date = document.querySelector("#date");
let button = document.querySelector("button");
let para = document.querySelector("p");

button.addEventListener("click", function () {
  let currDate = new Date();

  if(
    date.valueAsDate == null ||
    date.valueAsDate > currDate ||
    date.valueAsDate.getFullYear() < 1900){

    para.innerText = "please enter the valid date.";
    setTimeout(function () {
      para.innerText = "";
    }, 1000);
    return;
  }

  if (date.valueAsDate.getFullYear() == currDate.getFullYear() &&
    (currDate.getTime() - date.valueAsDate.getTime()) / (1000 * 60 * 60 * 24) < 30){
      let age = Math.floor((currDate.getTime() - date.valueAsDate.getTime()) / (1000 * 60 * 60 * 24));
      para.innerText = `You are ${age} days old.`;
      return;
    }
    else if (date.valueAsDate.getFullYear() == currDate.getFullYear() &&
    currDate.getDate() >= date.valueAsDate.getDate()){
      let age = currDate.getMonth() - date.valueAsDate.getMonth();
      para.innerText = `You are ${age} months old.`;
      return;
    }
    else if (date.valueAsDate.getFullYear() == currDate.getFullYear() &&
    currDate.getDate() < date.valueAsDate.getDate()){
      let age = (currDate.getMonth() - date.valueAsDate.getMonth()) - 1;
      para.innerText = `You are ${age} months old.`;
      return;
    }
    else if (date.valueAsDate.getMonth() <= currDate.getMonth() &&
     (date.valueAsDate.getDate() <= currDate.getDate())) {
      let age = currDate.getFullYear() - date.valueAsDate.getFullYear();
      let month = currDate.getMonth() - date.valueAsDate.getMonth();
      para.innerText = `You are ${age} years & ${month} months old.`;
      return;
    }
     else {
      let age = (currDate.getFullYear() - date.valueAsDate.getFullYear())- 1;
      para.innerText = `You are ${age} years old.`;
      return;
    }   
}); 