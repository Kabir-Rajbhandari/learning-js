// revised

console.log("Hello World !");
// alert("Hello Dear");
console.log({ name: "abcd", age: "18" });

console.warn("This is a warning to you...");
console.error("Error at line 9999");
console.table({
  id: "01221244E",
  userName: "abcd",
  email: "abcd124@gmail.com",
});

function sum(x, y) {
  let addValue = x + y;
  return addValue;
}

console.log(sum(1, 2));

// data types
// primitive data types : Number

let num1 = 10.011;
console.log(typeof num1);

// Not a number

let a = 10;
let b;

console.log(a + b);

function exercise() {
  let firstName = 5;
  let secondName = 6;

  console.log(firstName > secondName);
  console.log(firstName < secondName);
  console.log(firstName >= secondName);
  console.log(firstName <= secondName);
  console.log(firstName === secondName);
  console.log(firstName !== secondName);
  console.log(firstName != secondName);
  console.log(firstName == secondName);
}

console.log(exercise());

// string methods

let firstName = "aBCd";
let lastName = "wXYz";

console.log(firstName + " " + lastName);
console.log(firstName.concat(lastName));

// append method()

firstName += " pqrst";
console.log(firstName);

// length
console.log(firstName.length);

// cases

console.log(firstName.toLowerCase());
console.log(lastName.toUpperCase());

//slice method

console.log(lastName.slice(1, 3));

// split method ()

console.log(firstName.split(" "));

function exerciseTwo() {
  let p = "rectangle";
  let q = "square";
  let uppercase = "Circle";
  let message = `Hello ${p}, ${q} and ${uppercase}`;
  message += " hahahaha";
  console.log(message);
}

console.log(exerciseTwo());

// type conversion

let typeConvert = "150";

console.log(typeConvert);
console.log(typeof typeConvert);

typeConvert = parseInt(typeConvert);
console.log(typeConvert);
console.log(typeof typeConvert);

// if-else conditions

// exercise;

function passKey() {
  // let password = String(prompt("Enter the password: "));

  let password = " ";
  if (password.length == 8) {
    console.log("Welcome");
  } else if (password.length < 8) {
    console.log("Password is too short...");
  } else if (password.length > 8) {
    console.log("Password is too long & It should be 8 characters");
  } else {
    console.log("Please provide a password...");
  }
}

console.log(passKey());

// switch statement

function bulb() {
  let value = 0;
  let bulbOutput;

  switch (value) {
    case 0:
      bulbOutput = "OFF";
      console.log(bulbOutput);
      break;

    case 1:
      bulbOutput = "ON";
      console.log(bulbOutput);
      break;

    default:
      bulbOutput = "Value not found ...";
      console.log(bulbOutput);
  }
}

console.log(bulb());

function week() {
  let today = prompt("Which day is today ?");

  switch (today) {
    case "Sunday" && "sunday":
      console.log(`It's Sunday...`);
      break;

    case "Monday" && "monday":
      console.log(`It's Monday...`);
      break;

    case "Tuesday" && "tuesday":
      console.log(`It's  Tuesday...`);
      break;

    case "Wednesday" && "wednesday":
      console.log(`It's Wednesdayday...`);
      break;

    case "Thursday" && "thursday":
      console.log(`It's Thursday...`);
      break;

    case "Friday" && "friday":
      console.log(`It's Friday...`);
      break;

    case "Saturday" && "saturday":
      console.log("Its Holiday");
      break;

    default:
      console.log("Days doesnot exist ... Try Again");
  }
}

console.log(week());

// for loop (loops in js)

for (let i = 0; i <= 10; i++) {
  console.log(i);
}
