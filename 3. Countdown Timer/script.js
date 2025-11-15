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

function updateGiveAwayTime() {
  let date = new Date();
  // Find after 7 days time
  const after7days = date.getTime() + 24 * 18 * 60 * 60 * 1000;
  const giveAwayDate = new Date(after7days)
  let giveAwayday = daysOfWeek[giveAwayDate.getDay()];
  let giveAwaydate = giveAwayDate.getDate();
  let giveAwaymonth = monthNames[giveAwayDate.getMonth()];
  let giveAwayYear = giveAwayDate.getFullYear();
  let currTime = date.getHours();

  giveAway.innerText = `Giveaway ends on ${giveAwayday}, ${giveAwaydate} ${giveAwaymonth} ${giveAwayYear} 11:30am`

};

updateGiveAwayTime();

setInterval(function updateTime() {}, 1000);

let date = new Date();
// console.log(date.getHours() - new Date(next7days).getHours());
// console.log(new Date(next7days));
