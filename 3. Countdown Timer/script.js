let giveAway = document.querySelector("h3");
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

setInterval(function updateGiveAwayTime() {
  let date = new Date();
  // Find after 7 days time
  const giveAway = date.getTime() + 24 * 2 * 60 * 60 * 1000;
  let giveAwayday = daysOfWeek[giveAway.getDay()];
  let giveAwaymonth = monthNames[giveAway.getMonth()];
  let giveAwayYear = monthNames[giveAway.getFullYear()];
  let currTime = date.getHours();



}, 100000);

setInterval(function updateTime() {}, 1000);

let date = new Date();
console.log(date.getHours() - new Date(next7days).getHours());
console.log(new Date(next7days));
