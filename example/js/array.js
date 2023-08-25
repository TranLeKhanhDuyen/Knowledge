var languages = [
  "js",
  "php",
  "java",
  "c++",
  "python",
  "react",
  "node",
  "angula",
  "express",
];

var languages2 = ["j", "pp", "no", "ang", "exp"];
languages.splice(5, 2, "flutter");

console.log(languages.pop());
console.log(languages.shift());
console.log(languages.unshift("dart", "html"));
console.log(languages);
console.log(languages.concat(languages2));

function joinWithCharacter(array, charactor) {
  return array.join(charactor);
}
var cars = ["Honda", "Mazda", "Mercedes"];
var result = joinWithCharacter(cars, " -- ");
console.log(result);

function getLastElement(asc) {
  return asc.slice(-1);
}
var animals = ["Monkey", "Tiger", "Elephant"];
var result = getLastElement(animals);
console.log(result); // Output: "Elephant"
console.log(animals); // Output: ['Monkey', 'Tiger', 'Elephant']

// ===  ARRAY METHODS ===
var courses = [
  {
    id: 1,
    name: "JS",
    coin: 0,
  },
  {
    id: 2,
    name: "HTML,CSS",
    coin: 200,
  },
  {
    id: 3,
    name: "React",
    coin: 0,
  },
  {
    id: 4,
    name: "Python",
    coin: 100,
  },
];

// =========== forEach ====================
courses.forEach(function (courses, index) {
  console.log(index, courses);
});

// =========== every ====================

var isFree = courses.every(function (courses, index) {
  console.log(index, courses);
  return courses.coin === 0;
});
console.log(isFree);

// =========== find =============
var course = courses.find(function (courses, index) {
  console.log(index, courses);
  return courses.name === "JS";
});
console.log(course);

// ============= map ==============
var newCourses = courses.map(function (course) {
  return {
    id: course.id,
    name: `Language: ${course.name}`,
    coin: course.coin,
    coinText: `Price: ${course.coin}`,
  };
});
console.log(newCourses);

//=========== reduce ===========
function coinHandler(accumulator, currentValue) {
  return accumulator + currentValue.coin;
}
var totalCoin = courses.reduce(coinHandler, 0);
console.log(totalCoin);

//ex2: reduce
const numbers = [45, 4, 9, 16, 25];
let sum = numbers.reduce(myFunction);
console.log("The sum is " + sum);

function myFunction(total, value, index, array) {
  return total + value;
}

//========== filter ============
const sports = [
  {
    name: "volleyball",
    like: 6,
  },
  {
    name: "badmintion",
    like: 5,
  },
  {
    name: "boxing",
    like: 2,
  },
  {
    name: "climbing",
    like: 4,
  },
  {
    name: "cycling",
    like: 7,
  },
];
function getMostFavoriteSport(sports) {
  return sports.filter(function (sport) {
    return sport.like >= 5;
  });
}
console.log(getMostFavoriteSport(sports));
