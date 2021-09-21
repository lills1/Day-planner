var time=document.getElementById("currentDay");

function timeDisplay(){
time = moment().format("hh:mm:ss");
$("#currentDay").text(time);
// document.getElementById("currentDay").innerText = time;
console.log(time);
}

setInterval(timeDisplay,1000);



