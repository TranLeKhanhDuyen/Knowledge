var h1Element = document.querySelectorAll("h1");
for (var i = 0; i < h1Element.length; ++i) {
  h1Element[i].onclick = function (e) {
    console.log(e.target);
  };
}

//
var inputValue;
var inputElement = document.querySelector('input[type="text"]');
inputElement.oninput = function (e) {
  inputValue = e.target.value;
  console.log(inputValue);
};
inputElement.onkeydown = function (e) {
  console.log(e);
};

//
var checkboxElement = document.querySelector("select");
checkboxElement.onchange = function (e) {
  console.log(e.target.value);
};

document.onkeydown = function (e) {
  // console.log(e.which);
  switch (e.which) {
    case 27:
      console.log("exit");
      break;
    case 13:
      console.log("send");
      break;
  }
};
