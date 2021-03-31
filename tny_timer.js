/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Review Assignment

   Event Timer
   Author: Demesvar Delva
   Date:  3/31/2021

*/

/* Execute the function to run and display the countdown clock*/
showClock();
setInterval("showClock()", 1000);

/* Function to create and run the clock */
function showClock () {

/* Store the date and time */
  var thisday = new Date("May 19, 2018 9:31:27");
  var localDate = thisDay.toLocaleDateString();
  var localTime = thisDay.toLocaleTimeString();

/* Display the date and time */
  document.getElementById("currentTime").innerHTML = "<span>" + localDate + "</span>" + "<span>" + localTime + "</span>";

/* Call function and store the date */
  var j4Date = nextJuly4(thisDay);
  j4Date.setHours(21, 0, 0);

/* Calculate the days until July 4th */
  var days = (j4Date - thisDay)/(1000*60*60*24);

/* Calculate the hours left in the day */
  var hrs = (days - Math.floor(days))*24;

/* Calculate the minutes and seconds left in the hour */
  var mins = (hrs - Math.floor(hrs))*60;
  var secs = (mins - Math.floor(mins))*60;

/* Display the time left until July 4th */
  document.getElementById("dLeft").textContent = Math.floor(days);
document.getElementById("hLeft").textContent = Math.floor(hrs);
document.getElementById("mLeft").textContent = Math.floor(mins);
document.getElementById("sLeft").textContent = Math.floor(secs);
	
}

function nextJuly4(currentDate) {
   var cYear = currentDate.getFullYear();
   var jDate = new Date("July 4, 2018");
   jDate.setFullYear(cYear);
   if ((jDate - currentDate) < 0) jDate.setFullYear(cYear + 1);
   return jDate;
}
