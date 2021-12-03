
// const data = require('../daysofyear.json');
// console.log(data);


fetch("https://sreyache.github.io/pui-final-project/daysofyear.json")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(error));