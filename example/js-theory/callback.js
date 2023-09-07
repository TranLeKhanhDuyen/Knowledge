function myFunction(param) {
  param("Hello axinomoto");
}

function myCallback(value) {
  console.log("Value: ", value);
}
myFunction(myCallback);

// ========
function performOperation(number, callback) {
  const result = number * number;
  callback(result);
}

function callbackFunction(result) {
  console.log("Result: " + result);
}

performOperation(5, callbackFunction);

//=======
Array.prototype.map2 = function (callback) {
  var arrayLength = this.length;
  for (var i = 0; i < arrayLength; ++i) {
    callback(this[i], i);
  }
};

var courses = ["js", "php", "python"];

courses.map2(function(course, index) {
    console.log(index, course)
});
