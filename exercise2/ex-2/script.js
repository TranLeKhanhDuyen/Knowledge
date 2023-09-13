/* Write a JavaScript function to get the values 
of First and Last names of the form */

document.getElementById("form1").addEventListener("submit", function (e) {
  e.preventDefault(); // block prevent default of form
  var firstName = document.getElementById("form1").elements["fname"].value;
  var lastName = document.getElementById("form1").elements["lname"].value;

  // Display the values
  var resultDiv = document.createElement("div");
  resultDiv.id = "result"; 
  resultDiv.innerHTML = "Name: " + firstName + " " + lastName;
  document.body.appendChild(resultDiv);
});

