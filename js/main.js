
let daysofyear = []

fetch("https://sreyache.github.io/pui-final-project/assets/daysofyear.json")
  .then(response => response.json())
  .then(function(data) {
      daysofyear = data;

      console.log(typeof daysofyear[0]);
      console.log(daysofyear[0].dow);
  })
  .catch(error => console.log(error));


  function changeCalendar() {
      console.log("calendar changed");
      var content = document.getElementById("month-selector").value;
      console.log(content);

      var image_name = document.getElementById("month-selector").value;
      console.log(daysofyear[1]);
  }


function weekend(friday, saturday, availability) {
    console.log("the weekend");
}

