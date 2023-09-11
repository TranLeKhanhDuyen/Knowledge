var boxElement = document.querySelector(".box");
boxElement.classList.add("red");

setTimeout(() => {
  boxElement.classList.remove("red");
}, 3000);

//
document.querySelector("h2").classList.add("title");
document.querySelector("p").classList.remove("sub-title");
document.querySelector("p").classList.add("content");

//
document.querySelectorAll("div").forEach(function (example) {
  example.classList.add("box");
});
