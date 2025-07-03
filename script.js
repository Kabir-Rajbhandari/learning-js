const a = 5;
const b = 15;
const c = a * b;
console.log("The multiplication of two number is ", c);

console.warn("Warning Messages..."); // shows warning message in console
console.error("Error at line 99999..."); // shows an error message in console

// alert(c);

// getElementById

function clicker() {
  alert("I'm the button tag not the input tag");
}

function inputClicker() {
  document.getElementById("submit").style.background = "red";
}

function inputBtn() {
  document.querySelector("#input_btn").style.width = "500px";
}

/* Multi-
Line
Comments
*/

// exercise

// alert("Welcome to the page...");

function addCart() {
  alert("Successfully Add to cart...");
}

function wishlist() {
  alert("Successfully wishlist...");
}

let p = "abcd";
let q = 45;

console.log(p);
console.log(q);

// new function for exercise two

let initNumber = 0;
document.querySelector(
  ".summary"
).innerHTML = `Your bag has ${initNumber} items`;

// exercise-three
// let name = prompt("Enter your name here: ");
// alert(name);
// document.getElementById("display_name").innerHTML = `Hello ${name}`;

let calculator = 14599;
console.log("The cots of Myntra Bag is", calculator);

const gst = 0.18;
console.log(eval("78+456-535*645"));

function drive() {
  let userAge = prompt("Enter your age: ");

  if (userAge >= 18 && userAge <= 50) {
    document.querySelector("#display_result").innerHTML =
      "Dear Sir/Mam. You can able to drive.";
  } else if (userAge > 50 && userAge <= 75) {
    document.querySelector("#display_result").innerHTML =
      "Your Age has cut the half of century so that u cannot drive from now.";
  } else if (userAge < 18 && userAge > 0) {
    document.querySelector("#display_result").innerHTML =
      "You cannot able to drive. Grow First...";
  } else {
    document.querySelector("#display_result").innerHTML =
      "Do u really exist ... ?";
  }
}

let fruits = ["apple", "banana", "pineapple"];
console.log("Is this function can generate randomly or not ... ? \n");

// return function
function addNumber(x, y) {
  x = Number(input("Enter the 1st number: "));
}
