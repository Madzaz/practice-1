var button = document.getElementById("button");

var color = prompt("Enter button color!").toLowerCase();
var height = prompt("Enter button height!");
if (color == "blue") {
  button.style.backgroundColor = "blue";
} else if (color == "red") {
  button.style.backgroundColor = "red";
} else {
  button.style.backgroundColor = "green";
}

if (height > 50) {
  button.style.height = height + "px";
} else {
  document.getElementById("paragraph").innerHTML =
    "Button need to be greater then 50px!";
}
