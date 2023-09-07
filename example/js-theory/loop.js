// === FOR LOOP===
for (var i = 1; i <= 10; i++) {
  console.log(i);
}

let text = "";
for (let i = 0; i < 5; i++) {
  text += "The number is " + i + "\n";
}
console.log(text);

//===
function getRandNumbers(min, max, length) {
  const result = [];
  for (let i = 0; i < length; i++) {
    const randomNum = Math.random() * (max - min) + min;
    result.push(randomNum);
  }
  return result;
}
const min = 4;
const max = 20;
const length = 16;
const randomNumbers = getRandNumbers(min, max, length);
console.log(randomNumbers);

//==
function getTotal(numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
}
const result = getTotal([1, 2, 3]);
console.log(result); // Output: 6

//===
var myArray = ["Js", "PHP", "Java", "Dart", "Python"];
var arrayLength = myArray.length;
for (var i = 0; i < arrayLength; i++) {
  console.log(i, myArray[i]);
}

//==
var orders = [
  { name: "abc", price: 30000 },
  { name: "bcd", price: 35000 },
  { name: "cde", price: 40000 },
];
function getTotal2(orders) {
  var total2 = 0;
  for (var i = 0; i < orders.length; i++) {
    total2 += orders[i].price;
  }
  return total2;
}
var total2 = getTotal2(orders);
console.log(total2);

// === FOR/IN LOOP===
var myInfo = {
  name: "Duyen tran",
  age: 20,
  address: "Da Nang",
};
for (var key in myInfo) {
  console.log(myInfo[key]);
}

//==
function run(object) {
  const results = [];
  for (const i in object) {
    results.push(`Thuộc tính ${i} có giá trị ${object[i]}`);
  }
  return results;
}
console.log(run({ name: "Nguyen Van A", age: 26 }));

// === FOR/OF LOOP===
let language = "JavaScript";

let title = "";
for (let x of language) {
  title += x + "\n";
}
var output = title;
console.log(output);

// === WHILE LOOP===
var i = 0;
while (i < 10) {
  i++;
  console.log(i);
}

// === DO/WHILE LOOP===
var i = 0;
do {
  i++;
  console.log(i);
} while (i < 10);

// === BREAK ===
for (i = 0; i <= 10; i++) {
  console.log(i);
  if (i >= 5) {
    break;
  }
}

// === CONTINUE ===
for (i = 0; i <= 10; i++) {
  if (i % 2 !== 0) {
    continue;
  }
  console.log(i);
}

// === NESTED LOOP ===