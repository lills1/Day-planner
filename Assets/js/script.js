var time=document.getElementById("currentDay");


time = moment().format("hh:mm:ss");
$("currentDay").text(time);