var btn = document.getElementById("btn");

function listener1() {
  console.log("event listener 1");
}

function listener2() {
  console.log("event listener 2");
}

btn.addEventListener("click", listener1);
btn.addEventListener("click", listener2);

setTimeout(function () {
  btn.removeEventListener("click", listener1);
}, 3000);
