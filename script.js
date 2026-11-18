// create a new digital clock displaying the current time use javascript date object

console.log("hello!");
// 1. get today's hour, minutes, seconds
//// javascript date object 
// 2. store that value somewhere ? 
// 3. display that value on the web page
//// getElementbyId to update input to webpage 

function GetTime() {
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    console.log(d, h, m, s);
    // hour : minutes : seconds 
    var time = h + ":" + m + ":" + s;
    console.log(time);
    document.getElementById("clock").innerHTML = time;
    // update in real time 
    setTimeout(GetTime, 1000);
}

function checkTime(i) {
    if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
    return i;
}

GetTime();



