const myBtn = document.getElementById("btn");
const myInput = document.getElementById("inputEl");
// console.log(myInput);
const emailReg = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
const warning = document.getElementById("warning");
const form = document.getElementById("form");
let myArray = [];
form.addEventListener("submit", function (event) {
  event.preventDefault();
});
myBtn.addEventListener("click", function (event) {
  if (emailReg.test(myInput.value)) {
    myArray.push(myInput.value);
    console.log(myArray);
  } else {
    myInput.style.border = "2px solid hsl(354, 100%, 66%)";
    warning.innerHTML = "<p> Provide a valid email address </p>";
  }
  // event.preventDefault();
});
