//Common variables
var msecPerMinute = 1000*60;
var msecPerHour = msecPerMinute*60;
var msecPerDay = msecPerHour*24;

//get date of specific date
var concertDateTime = new Date(2016,8,30,19,59);
var startStamp = concertDateTime.getTime();

function counterClock(){ 
	//Get current date
	var newDate = new Date();
	var newStamp = newDate.getTime();

	//Get the difference in ms 
	var diff = Math.round(startStamp - newStamp);

	var days = Math.floor(diff/msecPerDay);
	diff = diff - (days * msecPerDay);

	var hours = Math.floor(diff / msecPerHour );
	diff = diff - (hours * msecPerHour );

	var minutes = Math.floor(diff / msecPerMinute );
	diff = diff - (minutes * msecPerMinute );

	var seconds = Math.floor(diff/1000);

	var day = (days < 10 ? '0' : '') + days.toString();
	var dayPosOne = day[0];
	var dayPosTwo = day[1];

	var hour = (hours < 10 ? '0' : '') + hours.toString();
	var hourPosOne = hour[0];
	var hourPosTwo = hour[1];


	var minute = (minutes < 10 ? '0' : '') + minutes.toString();
	var minutePosOne = minute[0];
	var minutePosTwo = minute[1];

	var second = (seconds < 10 ? '0' : '') + seconds.toString();
	var secondPosOne = second[0];
	var secondPosTwo = second[1];

	//Put in the card
	document.getElementById("day__position--one").innerHTML = dayPosOne;
	document.getElementById("day__position--two").innerHTML = dayPosTwo;

	document.getElementById("hour__position--one").innerHTML = hourPosOne;
	document.getElementById("hour__position--two").innerHTML = hourPosTwo;

	document.getElementById("minute__position--one").innerHTML = secondPosOne;
	document.getElementById("minute__position--two").innerHTML = secondPosTwo;
}

setInterval(counterClock, 1000);

