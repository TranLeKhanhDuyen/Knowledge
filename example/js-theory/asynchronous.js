console.log("number 1");
console.log("number 2");
setTimeout(function () {
  console.log("number 3");
}, 2000);
console.log("number 4");
console.log("number 5");

//==

function fetchDataFromAPI(callback) {
  setTimeout(function () {
    const data = { name: "John", age: 30 };
    callback(data);
  }, 2000);
}
function displayData(data) {
  console.log("Name: " + data.name);
  console.log("Age: " + data.age);
}
fetchDataFromAPI(displayData);

console.log("Fetching data...");
