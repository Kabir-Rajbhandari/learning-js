function rock() {
  let rockBtn = (document.querySelector("#user_input").innerHTML = "Rock");
}

function paper() {
  let paperBtn = (document.querySelector("#user_input").innerHTML = "Paper");
}

function scissor() {
  let scissorBtn = (document.querySelector("#user_input").innerHTML =
    "Scissor");
}

function generateRandom() {
  let computerInput = "";
  let randomGenerator = Math.random() * 3;
  console.log("Working or not", randomGenerator);

  if (randomGenerator > 0 && randomGenerator <= 1) {
    document.querySelector("#computer_input").innerHTML = "Rock";
    computerInput = "Rock";
  } else if (randomGenerator > 1 && randomGenerator <= 2) {
    document.querySelector("#computer_input").innerHTML = "Paper";
    computerInput = "Paper";
  } else {
    document.querySelector("#computer_input").innerHTML = "Scissor";
    computerInput = "SCissor";
  }
}

// ternary operator

let age = 21;
let mssg = age > 18 ? "Adult" : "Kid";

console.log(mssg);

// guard operator

let r = 0;
let s = r || 18;
console.log(r);
console.log(s);
