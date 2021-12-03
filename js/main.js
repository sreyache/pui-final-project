
let daysofyear = []

fetch("https://sreyache.github.io/pui-final-project/daysofyear.json")
  .then(response => response.json())
  .then(function(data) {
      daysofyear = data;
      console.log(typeof daysofyear[0]);
      console.log(daysofyear[0].dow);
  })
  .catch(error => console.log(error));

