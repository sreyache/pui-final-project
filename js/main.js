
let weekends = []

//READ JSON FILE
fetch("https://sreyache.github.io/pui-final-project/assets/2022_weekends.json")
  .then(response => response.json())
  .then(function(data) {
      weekends = data;
      console.log(weekends[0].month1);

      console.log(typeof weekends[0]);
      console.log(weekends[0].dow1);
      console.log(weekends.length);
  })
  .catch(error => console.log(error));


//DYNAMICALLY CHANGE CALENDAR IMAGE BASED ON INPUT FROM DROPDOWN
function changeCalendar() {
    console.log("calendar changed");

    var month = document.getElementById("month-selector").value;
    console.log(month);

    var pathname = "https://sreyache.github.io/pui-final-project/img/calendar/" + month + ".png";

    var image = document.getElementById('calendar_image');
    image.src = pathname;
}

//IDENTIFY WEEKENDS WITHIN A GIVEN MONTH
function findDates(month) {
    var given_month = month;
    var monthweekend = []

    for (var i in weekends) {
        if (weekends[i].month1 == given_month) {
            monthweekend.push(weekends[i]);
            console.log("weekends-found");
        }
    }
   return monthweekend; 
}


//FIND INITIAL DATES
function load() {
    for (var i in weekends) {
        weekends[i].availability = "";
    }    

    var current_month = document.getElementById("month-selector").value;
    var live_weekends = findDates(current_month);
    
    console.log(live_weekends);
    
    document.getElementById("show_location_options").style.display = "none";

    document.getElementById("calendar-column").style.display = "none";

    document.getElementById("availability-column").style.display = "none";

}

// REPLACE NAME WITH INPUTTED NAME
function loadName() {
    console.log("name-recorded");
    var name = document.getElementById("firstname").value;
    var welcome = "Hi " + " <span>" + name + "</span>" + ",";
    console.log(name);

    parent = document.getElementById("starter");
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }

    var nameintro = document.createElement('h3');
    var br = document.createElement('br');
    nameintro.innerHTML = welcome;
    parent.appendChild(br);
    parent.appendChild(nameintro);

    document.getElementById("show_location_options").style.display = "block";
}

let locations = [];

function submitLocation(locationid) {
    locationid = locationid.id;
    console.log(locationid);
    
    locationvalue = document.getElementById(locationid).getElementsByClassName("locationname")[0].value;

    parent = document.getElementById(locationid);
    console.log(parent);

    child1 = document.getElementById(locationid).getElementsByClassName("submit_location")[0];
    child2 = document.getElementById(locationid).getElementsByClassName("locationname")[0];
    console.log(child1);

    parent.removeChild(child1);
    parent.removeChild(child2);

    var newlocation = document.createElement('h4');
    newlocation.class = "locationtitle";
    newlocation.innerHTML = locationvalue;
    parent.appendChild(newlocation);

}

function finishedLocations() {
    document.getElementById("calendar-column").style.display = "block";
    document.getElementById("availability-column").style.display = "block";

}

function submitAvailability() {
    console.log("availability-submitted");

}
