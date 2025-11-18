let date = document.querySelector("#date");
let button = document.querySelector("button");
let para = document.querySelector("p");

button.addEventListener("click", function () {
  let currDate = new Date();
  let age;
   
  if(date.valueAsDate == null || date.valueAsDate > currDate ||date.valueAsDate.getFullYear()< 1900){
    para.innerText = "please enter the valid date.";
    setTimeout(function () {
      para.innerText = "";
    }, 1000);
    return;
  }

  // if ((date.valueAsDate.getMonth() <= currDate.getMonth()) && (date.valueAsDate.getDate() <= currDate.getDate())) {
  //   age = currDate.getFullYear() - date.valueAsDate.getFullYear();
  // } else if ((currDate.getTime() - date.valueAsDate.getTime()) / (1000 * 60 * 60 * 24) < 30) {
  //   age = Math.floor((currDate.getTime() - date.valueAsDate.getTime()) / (1000 * 60 * 60 * 24));
  //   para.innerText = `You are ${age} days old.`;
  //   return;
  // } else if (date.valueAsDate.getFullYear() == currDate.getFullYear()) {
  //   age = currDate.getMonth() - date.valueAsDate.getMonth();
  //   para.innerText = `You are ${age} months old.`;
  //   return;
  // } else {
  //   age = (currDate.getFullYear() - date.valueAsDate.getFullYear() )- 1;
  // }

  para.innerText = `You are ${age} years old.`;
  setTimeout(function () {
      para.innerText = "";
    }, 1000);
});
