const paragraph = document.getElementById("paragraph");
const highlightLink = document.getElementById("highlightLink");

function highlightBoldWords() {
  const boldWords = paragraph.querySelectorAll("b");
  boldWords.forEach((word) => {
    word.style.color = "red";
  });
}

function removeHighlight() {
  const boldWords = paragraph.querySelectorAll("b");
  boldWords.forEach((word) => {
    word.style.color = "initial"; // reset to the default color
  });
}

highlightLink.addEventListener("mouseover", highlightBoldWords);
highlightLink.addEventListener("mouseout", removeHighlight);
