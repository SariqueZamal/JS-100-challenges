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

let date = new Date();
// Find after 7 days time
const after7days = date.getTime() + 24 * 7 * 60 * 60 * 1000;
const giveAwayDate = new Date(after7days);
let giveAwayDay = daysOfWeek[giveAwayDate.getDay()];
let giveAwaydate = giveAwayDate.getDate();
let giveAwaymonthIndex = giveAwayDate.getMonth();
let giveAwaymonth = monthNames[giveAwayDate.getMonth()];
let giveAwayYear = giveAwayDate.getFullYear();

// Logic for Give Away Time update
function updateGiveAwayTime() {
  giveAway.innerText = `Giveaway ends on ${giveAwayDay}, ${giveAwaydate} ${giveAwaymonth} ${giveAwayYear} 11:30 am`;
}

updateGiveAwayTime(); // Initial Call

// Update Time in every second
function updateTime() {
  let date = new Date();


  const giveAwayTime = new Date(
    giveAwayYear,
    giveAwaymonthIndex,
    giveAwaydate,
    11,
    30,
    0,
    0
  );

  let diffInMilliseconds = Math.abs(giveAwayTime.getTime() - date.getTime());
  let totalSec = diffInMilliseconds / 1000;
 
  // update days
  let d = Math.floor(totalSec / 86400);
  totalSec = totalSec - d * 86400; 

  // updtae hours
  let hr = Math.floor(totalSec / 3600);
  totalSec = totalSec - hr * 3600;

  // update min
  let m = Math.floor(totalSec / 60);
  totalSec = totalSec - m * 60;

  let s = Math.floor(totalSec);

  days.innerText = `${d}`;
  hours.innerText = `${hr}`;
  mins.innerText = `${m}`;
  secs.innerText = `${s}`;
}

updateTime();
setInterval(updateTime, 1000);
