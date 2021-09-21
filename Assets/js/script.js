var time=document.getElementById("currentDay");
var day=document.getElementsByClassName("day")

//creates a function to display the current time
function timeDisplay(){
time = moment().format("hh:mm:ss");
$("#currentDay").text(time);
console.log(time);
}

day=moment().format("dddd, MMMM Do YYYY")
$(".day").text(day);
// calls the function and updates it every second
setInterval(timeDisplay,1000);

function check_time(){
    // select all time classes
    let nodes = document.querySelectorAll('.d-flex');
    for (let node of nodes ) {
      // should get the time using Date(), but for this example a fixed hour always works ;)
      const current_time = 12; 
      // get the time from a data-attribute, don't use an id for this!
      const node_time = parseInt(node.getAttribute('data-time'));
      // add a relevant class, much easier to maintain/update than styling elements inside your JS
      if(current_time === node_time )
        node.classList.add('now');
      else if(current_time > node_time )
        node.classList.add('past');
      else if(current_time < node_time )
        node.classList.add('future');
    }
  }


