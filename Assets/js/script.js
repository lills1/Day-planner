var time = document.getElementById("currentDay");
var day = document.getElementsByClassName("day");


//creates a function to display the current time
function timeDisplay() {
    time = moment().format("hh:mm:ss");
    $("#currentDay").text(time);
    console.log(time);
}

day = moment().format("dddd, MMMM Do YYYY")
$(".day").text(day);
// calls the function and updates it every second
setInterval(timeDisplay, 1000);


function check_time() {

    if (!localStorage.getItem("schedule")) {
        const LEN = 9;
        const scheduleList = new Array(LEN).fill("");
        localStorage.setItem("schedule", JSON.stringify(scheduleList));
    }
    else {
        scheduleList = JSON.parse(localStorage.getItem('schedule')) || [];
        console.log("check_time function called");

        let nodes = document.querySelectorAll(".colourTime");
        console.log("nodes:" + nodes.length);
        var d = new Date();
        var current_time = d.getHours();
        var currentPos = -1;
        for (let node of nodes) {
            currentPos++;
            textAreaEl = node.getElementsByClassName("justify-content-between")[0];
            textAreaEl.value = scheduleList[currentPos];
        }
    }

    // select all time classes
    console.log("check_time function called");
    let nodes = document.querySelectorAll(".colourTime");
    console.log("nodes:" + nodes.length);
    var d = new Date();
    var current_time = d.getHours();
    for (let node of nodes) {
        //look for div with 1 child div
        console.log('node.getElementsByTagName("div").length' + node.getElementsByTagName("div").length)
        if (node.getElementsByTagName("div").length == 1) {
            //fetch col-1
            dataTimeEl = node.getElementsByClassName("col-1")[0];
            console.log("col-1" + dataTimeEl);
            textAreaEl = node.getElementsByClassName("justify-content-between")[0];
            const node_time = parseInt(dataTimeEl.getAttribute('data-time')); console.log("current_time" + current_time + " node_time:" + node_time)
            // add a relevant class, much easier to maintain/update than styling elements inside your JS
            if (current_time === node_time) {
                textAreaEl.classList.add('now');
                console.log("matchnow");
            }
            else if (current_time > node_time) {
                textAreaEl.classList.add('past');
                console.log("matchpast");
            }
            else if (current_time < node_time) {
                textAreaEl.classList.add('future');
                console.log("matchfuture");
            }
        }
    }
}
function saveScheduleItem(currentPos) {
    scheduleList = JSON.parse(localStorage.getItem('schedule')) || [];
    var value = document.getElementsByTagName("textarea")[currentPos].value;
    scheduleList[currentPos] = value;
    localStorage.setItem("schedule", JSON.stringify(scheduleList));
}

function clearLocal() {
    if (confirm("Are you sure you want to clear schedule? All data will be lost")) {
        //clears local storage
        window.localStorage.clear();
        //textareas targeted
        let nodes = document.getElementsByTagName("textarea");
        console.log("nodes:" + nodes.length);
        //loop through text area and sets to empty string only on page
        for (let node of nodes) {
            node.value = "";
        }
        // updates local storage to an empty schedule
        const LEN = 9;
        const scheduleList = new Array(LEN).fill("");
        localStorage.setItem("schedule", JSON.stringify(scheduleList));
    }
}

