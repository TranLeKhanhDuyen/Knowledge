var headingElement = document.querySelector("h1");
console.log(headingElement);

headingElement.setAttribute("class", "heading");
headingElement.title = "Title test";

console.log(headingElement.getAttribute("class"));
console.log(headingElement.getAttribute("title"));

//innerText
headingElement.innerText = "Learn innerText";

//innerHTML
var boxElement = document.querySelector(".box");
boxElement.innerHTML = "<h2>Heading</h2>";
console.log(document.querySelector("h2").innerText);
console.log(boxElement.innerHTML);

//===
var courses = ["HTML & CSS", "Javascript", "PHP", "Java"];
function render(courses) {
  var courseList = document.querySelector(".courses-list");
  var courseItems = courses.map(function (course) {
    return "<li>" + course + "</li>";
  });
  courseList.innerHTML = courseItems.join("");
}
render(courses);
