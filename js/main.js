
let daysofyear = []

//READ JSON FILE
fetch("https://sreyache.github.io/pui-final-project/assets/2022_weekends.json")
  .then(response => response.json())
  .then(function(data) {
      daysofyear = data;


      console.log(typeof daysofyear[0]);
      console.log(daysofyear[0].dow);
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
    
    console.log(daysofyear.len);
}

//DATE CONSTRUCTOR
// function Date (day, month, dow) {
//     console.log("the weekend");
// }

//MATCHING WEEKENDS 
//FIND THE FIRST FRIDAY



//WEEKEND CONSTRUCTOR
// function Weekend(friday, saturday, availability) {
//     console.log("the weekend");
// }

//REPLACE LOCATION FIELD WITH SUBMITTED CONTENT

// function replaceField() {

// }

