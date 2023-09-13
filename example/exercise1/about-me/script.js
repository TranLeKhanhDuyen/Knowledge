document.body.style.fontFamily = "Arial, sans-serif";
document.getElementById("nickname").innerHTML = "Duyen Tran";
document.getElementById("favorites").innerHTML = "music";
document.getElementById("hometown").innerHTML = "Quang Nam";
var items = document.querySelectorAll("li");
for (var i = 0; i < items.length; i++) {
  items[i].classList.add("listitem");
}

var styleItem = document.createElement("style");
styleitem.innerHTML = ".listitem {color: red;}";
document.head.appendChild(styleItem);

var itemImg = document.createElement("img");
itemImg.src =
  "https://d33wubrfki0l68.cloudfront.net/c502b8b878624cb9f0136d0f390791c33b7f3d34/3c7ad/images/home-page/webp/discover/strategize-design-develop-image.webp";
document.body.appendChild(itemImg);
