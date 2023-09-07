//=== Promise.resolve ===
const resolvedPromise = Promise.resolve("This promise is resolved.");
resolvedPromise.then((result) => console.log(result)); // This promise is resolved.

//=== Promise.reject ===
function sleep(ms) {
  return new Promise(function (resolve) {
    setTimeout(resolve, ms);
  });
}

sleep(1000)
  .then(function () {
    console.log(1);
    return sleep(1000);
  })
  .then(function () {
    console.log(2);
    return new Promise(function (resolve, reject) {
      reject("stop");
    });
  })
  .then(function () {
    console.log(3);
    return sleep(1000);
  })
  .then(function () {
    console.log(4);
    return sleep(1000);
  })
  .catch(function (err) {
    console.log(err);
  });

var promise = new Promise(function (resolve, reject) {});

//=== Promise.all ===
const promise1 = Promise.resolve("Promise 1 resolved.");
const promise2 = Promise.resolve("Promise 2 resolved.");
const promise3 = Promise.resolve("Promise 3 resolved.");

Promise.all([promise1, promise2, promise3])
  .then((results) => console.log(results)) 
  .catch((error) => console.log(error));

//==
function fetchData1() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve("Data 1");
    }, 2000);
  });
}

function fetchData2() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve("Data 2");
    }, 1500);
  });
}

function fetchData3() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve("Data 3");
    }, 1000);
  });
}

Promise.all([fetchData1(), fetchData2(), fetchData3()])
  .then(function (results) {
    console.log("All results");
    console.log(results); 
  })
  .catch(function (error) { //no promises are rejected => .catch() block is never fired.
    console.log("All reject:", error);
  });
