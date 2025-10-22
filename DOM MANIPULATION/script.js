 // Selecting elements
var username = document.querySelector("#username");
var password = document.querySelector("#password");
var button = document.querySelector("#login");
var para = document.querySelector("p");

// Smooth transition effect for background color
document.body.style.transition = "background-color 0.4s ease";

// Username field events
username.addEventListener("keydown", function() {
  document.body.style.backgroundColor = "beige";
});

username.addEventListener("keyup", function() {
  document.body.style.backgroundColor = "azure";
  para.textContent = "You have entered: " + username.value;
});

// Password field events
password.addEventListener("keydown", function() {
  document.body.style.backgroundColor = "beige";
});

password.addEventListener("keyup", function() {
  document.body.style.backgroundColor = "azure";
  para.textContent = "Password Length: " + password.value.length;
});

// Button hover events
button.addEventListener("mouseover", function() {
  para.textContent = "Logging in...";
  para.style.color = "green";
});

button.addEventListener("mouseout", function() {
  para.textContent = "Ready to login";
  para.style.color = "red";
});

// Bonus: Click event (extra interactive)
button.addEventListener("click", function() {
  alert("Welcome " + username.value + "!");
});
