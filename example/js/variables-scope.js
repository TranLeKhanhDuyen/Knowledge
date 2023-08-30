// === Global Scope ===
var globalVariable = 10;

function myFunction() {
  console.log(globalVariable); // Output: 10
}

//=== Function Scope ===
function myFunction2() {
  var functionVariable = 20;
  console.log(functionVariable); // Output: 20
}

// console.log(functionVariable); // op: Error: functionVariable is not defined

// === Block Scope ===
function exampleScope() {
  if (true) {
    var varInBlock = "var with block scope";
    let letInBlock = "let with block scope";
    const constInBlock = "const with block scope";
    console.log(varInBlock);
    console.log(letInBlock);
    console.log(constInBlock);
  }
  console.log(varInBlock); //var with block scope
  // console.log(letInBlock); // Error: letInBlock is not defined
  // console.log(constInBlock);  // Error: constInBlock is not defined
}

exampleScope();
console.log(varInBlock); // Error: varInBlock is not defined
// console.log(letInBlock);  // Error: letInBlock is not defined
// console.log(constInBlock);  // Error: constInBlock is not defined
