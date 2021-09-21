var time=document.getElementById("currentDay");


time = moment().format("hh:mm:ss");
// $("currentDay").text(time);
document.getElementById("currentDay").innerText = time;
console.log(time);
setInterval(time,1000);



