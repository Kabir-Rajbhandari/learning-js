// array (data-structure)

let lists = [];
console.log(lists);

let numArray = [1, 4, 5, 8, 9, 12];
console.log(numArray);

let fruits = [
  "apple",
  "banana",
  "orange",
  "pineapple",
  "grapes",
  "mango",
  "guava",
];

console.log(fruits);

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);

// nested array or two-dimensional array

let nestArr = [1, 2, 3, 4, 5, ["abcd", "pqrs", "wxyz", "klmn"], 6, 7, 8, 9, 10];
console.log(nestArr);
console.log(nestArr[5]);
console.log(nestArr[5][0]); // abcd

// array method

let numbers = [78, 94, 12, 23, 58, 10, 89];
let letters = ["p", "q", "r", "s", "t", "u"];

// concat () method

let joinArray = numbers.concat(letters); // concat method()
console.log(numbers);
console.log(letters);
console.log(numbers.concat(letters));
console.log(joinArray);

// push method --> add elements in the last
fruits.push("strawberry");
console.log(fruits);

// pop() method (remove last element)
fruits.pop();
console.log(fruits);

// shift () method --> remove first element
fruits.shift();
console.log(fruits);

//unshift () method
fruits.unshift("blueberries");
console.log(fruits);

// includes() method ---> return boolean values in output
console.log(fruits.includes("strawberry")); // false
console.log(fruits.includes("orange")); // true

// join () method

console.log(fruits.join("-"));

// reverse()
console.log(fruits.reverse());

// slice () method

console.log(fruits.slice(0, 3)); // provide the value of index 0 to 2;

//sort() method
console.log(numbers.sort());

// objects [collectionn of data stores in a key:value pair]

let person = { name: "abcdef", age: 18, email: "abcd1234@gmail.com" };
console.log(typeof person);
console.log(person);

// accessing items from objects
console.log(person.email); // 1st way
console.log(person["age"]); // 2nd way

person.id = "a1"; // added the id = a1 in  the person objects
console.log(person);

//delete from objects

delete person.age;

// simple exercise

function carDetails() {
  let car = { type: "BMW", model: "2025", color: "black" };
  console.log(typeof car);

  console.log(car["type"]);

  car.type = "Toyota";
  console.log(car);

  car.wheels = 4;
  console.log(car);
}
carDetails();

// function with parameters

function userDetails(firstname, lastName) {
  let detailsOne = firstname;
  let detailsTwo = lastName;
  let combine = firstname + " " + lastName;

  console.log(`Hello ${combine}`);
}

userDetails("abcd", "pqrs");

// return in functions

function numAdd(x, y) {
  return x + y;
}

console.log(numAdd(45, 50));

// simple exercise done on function
function myFunction(num1, num2) {
  let value1 = num1;
  let value2 = num2;
  let multiply = value1 * value2;
  console.log(`The multiplication of ${value1} and ${value2} is ${multiply}.`);
}

myFunction(5, 15);

// function declearation

function functDeclear(userName) {
  console.log(`Hello ${userName}`);
}

functDeclear("World");

// function expression

const functVariable = function functExpress(number) {
  return number;
};

console.log(functVariable(78));
