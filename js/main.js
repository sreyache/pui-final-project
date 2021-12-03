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
function changeMonth() {
    console.log("calendar changed");

    var month = document.getElementById("month-selector").value;
    console.log(month);

    var pathname = "img/calendar/" + month + ".png";

    var image = document.getElementById('calendar_image');
    image.src = pathname;

    findDates(month);
}

//FIND INITIAL DATES
function load() {
    for (var i in weekends) {
        weekends[i].availability = "";
    }    

    var current_month = document.getElementById("month-selector").value;
    findDates(current_month);
    
    
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

//REPLACE LOCATIONS WITH INPUT GIVEN
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

//SHOW THE CALENDAR ONCE USER DONE UNPUTTING LOCATIONS
function finishedLocations() {
    document.getElementById("calendar-column").style.display = "block";
    document.getElementById("availability-column").style.display = "block";
}

//SHOW DATE CHANGES IN THE DOM
function showDates(weekends) {
    
    var datetext = [];

    for (var i in weekends) {
        txt = weekends[i].month1 + " " + weekends[i].day1 + "-" + weekends[i].month2 + " " + weekends[i].day2;
        datetext.push(txt);
    }
    
    console.log(datetext);
    datelistings = document.getElementsByClassName("date_toggle");

    if (datetext.length == 4){
        for (var i in datetext) {
            listingid = datelistings[i].id;
            document.getElementById(listingid).innerHTML = datetext[i];
        }
        document.getElementById("date5").innerHTML = "";
    }
    else {
        for (var i in datetext) {
            listingid = datelistings[i].id;
            document.getElementById(listingid).innerHTML = datetext[i];
        }
    }


}

//UPDATE THE MASTER VARIABLE WITH CHANGES
function submitAvailability() {
    console.log("availability-submitted");
}

//IDENTIFY WEEKENDS WITHIN A GIVEN MONTH
function findDates(month) {
    var given_month = month;
    var monthweekend = [];

    for (var i in weekends) {
        if (weekends[i].month1 == given_month) {
            monthweekend.push(weekends[i]);
            console.log("weekends-found");
        }
    }
    showDates(monthweekend);
    return monthweekend;
}
