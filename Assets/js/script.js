var time=document.getElementById("currentDay");
var day=document.getElementsByClassName("lead")

//creates a function to display the current time
function timeDisplay(){
time = moment().format("hh:mm:ss");
$("#currentDay").text(time);
console.log(time);
}

day=moment().format("dddd, MMMM Do YYYY")
$(".lead").text(day);
// calls the function and updates it every second
setInterval(timeDisplay,1000);


