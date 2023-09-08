var boxElement = document.querySelector(".box");
boxElement.style.width = "200px";
boxElement.style.height = "400px";
boxElement.style.backgroundColor = "blue";

Object.assign(boxElement.style, {
  width: "200px",
  height: "400px",
  backgroundColor: "blue",
});

console.log(boxElement.style.backgroundColor);

var redDiv = document.querySelector(".red");
redDiv.style.backgroundColor = "#f00";
