
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

    var pathname = "img/calendar/" + month + ".png";

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
    
    const targetDiv = document.getElementById("show_location_options");
    targetDiv.style.display = "none";

    

}



//DATE CONSTRUCTOR
// function Date (day, month, dow) {
//     console.log("the weekend");
// }

//MATCHING WEEKENDS 
//FIND THE FIRST FRIDAY



//REPLACE LOCATION FIELD WITH SUBMITTED CONTENT

// function replaceField() {

// }

