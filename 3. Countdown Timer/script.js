let giveAway = document.querySelector("h1");
let days = document.querySelector(".days");
let hours = document.querySelector(".hours");
let mins = document.querySelector(".mins");
let secs = document.querySelector(".secs");

const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
// console.log(daysOfWeek[date.getDay()]);


setInterval(function updateGiveAwayTime(){

}, 1000);

setInterval(function updateTime() {}, 1000);


let date = new Date();
const next7days = date.getTime() + 7 * 2 * 60 * 60 * 1000; // add next 7 days time
console.log(date.getHours() - new Date(next7days).getHours())
console.log(new Date(next7days));