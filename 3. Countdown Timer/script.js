let giveAway = document.querySelector("h1");
let days = document.querySelector(".days");
let hours = document.querySelector(".hours");
let mins = document.querySelector(".mins");
let secs = document.querySelector(".secs");

setInterval(function updateTime() {}, 1000);

let date = new Date();
const next7days = date.getTime() + 7 * 24 * 60 * 60 * 1000; // add next 7 days time
console.log(new Date(next7days));

const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

console.log(daysOfWeek[date.getDay()]);
