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

// Function to modify the text content of the paragraph
const changeText = () => {
  const p = document.querySelector("p");
  p.textContent = "I changed because of an inline event handler.";
};

//
var aElements = document.links;
for (var i = 0; i < aElements.length; ++i) {
  aElements[i].onclick = function (e) {
    console.log(e.target.href);
  };
}
console.log(aElements);

// preventDefault
var ulElement = document.querySelector("ul");
ulElement.onmousedown = function(e) {
  e.preventDefault();
};

ulElement.onclick = function(e) {
  console.log(e.target);
};