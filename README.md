# Javascript clock

This is my first foray into javascript programming. I copied the text from [this page](https://www.geeksforgeeks.org/how-to-design-digital-clock-using-javascript/) and decided I wanted to play around with it some to get both time formats showing and ... maybe later on, the local weather as well. 

My first attempt to show both times failed miserable with a thrown error on this code:

```js
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
    document.getElementById("clock").innerHTML = currentTime;
    
    // Error thrown for this line ...
    document.querySelector("ampmtime").innerHTML = ampmTime;
    // ... crap!
}
showTime();
```

What I am thinking is that I cannot do both in one function ... or something. More reading and learning is required.