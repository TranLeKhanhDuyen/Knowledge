var productsListElement = document.querySelector(".products-list");
var firstProductElement = document.querySelector(
  ".products-list .product:first-child"
);
var buttonElements = document.querySelectorAll(".products-list .cta-btn");
console.log(productsListElement);
console.log(firstProductElement);
console.log(buttonElements);

var listItems = document.querySelectorAll(".box-1 li");
console.log(listItems);

var boxNode = document.querySelector(".box-1");
console.log(boxNode);
console.log(boxNode.querySelectorAll("li"));
console.log(boxNode.getElementsByTagName("li"));
console.log(boxNode.querySelector("p"));
console.log(boxNode.getElementsByTagName("p"));
