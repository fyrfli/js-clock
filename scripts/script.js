setInterval(showTime, 1000);
function showTime() {
	let time = new Date();
	let hour = time.getHours();
	let min = time.getMinutes();
	let sec = time.getSeconds();
    am_pm = "AM";
    let hour2 = hour;

	if (hour > 12) {
		hour2 -= 12;
		am_pm = "PM";
	}
	if (hour == 0) {
		hour2 = 12;
		am_pm = "AM";
	}

	hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
	sec = sec < 10 ? "0" + sec : sec;

	let currentTime = hour + ":" + min + ":" + sec;
    let ampmTime = hour2 + ":" + min + ":" + sec + am_pm;

	document.getElementById("clock").innerHTML = currentTime + "\n" + ampmTime;
    // document.querySelector("ampmtime").innerHTML = ampmTime;

}
showTime();
