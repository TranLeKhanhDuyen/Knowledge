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
