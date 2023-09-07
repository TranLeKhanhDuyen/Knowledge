var date = 7;
if (date === 2) {
  console.log("Today is Monday");
}
if (date === 3) {
  console.log("Today is Tuesday");
} else if (date === 4) {
  console.log("Today is Wednesday");
} else {
  console.log("Maybe 5th, 6th, 7th, cn");
}
//===========================
function run(a) {
  if (a % 15 === 0) {
    return 3;
  } else if (a % 5 === 0) {
    return 2;
  } else if (a % 3 === 0) {
    return 1;
  }
}
console.log(run(3)); // 1
console.log(run(5)); // 2
console.log(run(15)); // 3

