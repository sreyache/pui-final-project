
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
      
      var month = document.getElementById("month-selector").value;
      console.log(month);

      var pathname = "img/calendar/" + month + ".png";
   
      var image = document.getElementById('calendar_image');
      image.src = pathname;
      
  }


function weekend(friday, saturday, availability) {
    console.log("the weekend");
}

