switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}
console.log(day);

//=================================
var date = 4;
switch (date) {
  case 2:
  case 3:
  case 4:
    console.log("Monday, Tuesday, Wednesday");
    break;
  case 5:
    console.log("Thusday");
  default:
    console.log("None");
}
