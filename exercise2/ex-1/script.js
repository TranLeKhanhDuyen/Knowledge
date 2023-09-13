/* 
Clicking on the button the font, font size, 
and color of the paragraph text will be changed 
*/

function js_style() {
var paragraph = document.getElementById('text');
var button = document.getElementById('jsstyle')

paragraph.style.fontFamily = "Arial";
paragraph.style.fontSize = "24px";
paragraph.style.color = "blue";

button.style.backgroundColor = "black";
button.style.color = "white"
}
