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

let numbers = [1, 2, 3, 4, 5];
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

// 
