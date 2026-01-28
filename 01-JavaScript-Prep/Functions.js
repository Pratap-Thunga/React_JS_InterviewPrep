// console.log("Functions is loaded");

// // What is function declaration -- Declaring a function. This can also be called defining a function(Function Definition)

// function greet() {
//   console.log("Hello World");
// }

// // Invoking or calling a function
// greet();
// greet();
// greet(); // calling multiple times

// //Q2 - What uis function expression -- Storing a function inside a variable or assigning a function to a variable

// const sayHi = function () {
//   // Function without a name is called anonymous function
//   console.log("Hi There");
// };
// sayHi();

// // Q3 - First Class Functions -- In JavaScript, functions are treated as first-class citizens. This means that functions can be assigned to variables, passed as arguments to other functions, and returned from other functions.
// function add(num) {
//   return num + num;
// }

// function getNum(func) {
//   return console.log("Sum is " + func(5));
// }

// getNum(add);

// // Q4 - What is IIFE (Immediateli Invoked Function Expression) -- A function runs as soons as it is defined.
// (function () {
//   console.log("IIFE Ran..");
// })();

// // Q5- IIEFE Output based questions

// function outer() {
//   let count = 0;
//   return function inner() {
//     count++;
//     console.log("Count is " + count);
//   };
// }

// const counter = outer();
// counter(); // Count is 1
// counter(); // Count is 2
// counter(); // Count is 3

// (function outFunc(x) {
//   return (
//     function inFunc(y) {
//       console.log(x);
//     },
//     20
//   );
// })(10); // Output is 10

// // Q6 - Funtion Hoisting -- In JavaScript, function declarations are hoisted to the top of their containing scope, meaning they can be called before they are defined in the code.

// hoistedFunction(); // This works because of hoisting

// function hoistedFunction() {
//   console.log("This function is hoisted!");
// }

// nonhoistedFunction(); // This will throw an error

// const nonhoistedFunction = function () {
//   console.log("This function is not hoisted!");
// }; //Uncaught ReferenceError: Cannot access 'nonhoistedFunction' before initialization

// {
//   var a = 10;
//   function testScope() {
//     console.log(a);
//     var a = 20;
//   }
//   testScope(); // Output: undefined - due to variable hoisting within the function scope, not the outer block scope.
// }

// // Q7 - Parameters vs Arguments
// function multiply(x, y) {
//   // x and y are parameters
//   return x * y;
// }

// const result = multiply(5, 10); // 5 and 10 are arguments
// console.log("Result is " + result);

// // Q8 - Default Parameters
// function greetUser(name = "Guest") {
//   console.log("Hello, " + name + "!");
// }

// greetUser("Alice"); // Hello, Alice!
// greetUser(); // Hello, Guest!

// // Q9 - Spread Vs Rest Operator

// // Spread Operator - Expands an array into individual elements
// const numbers = [1, 2, 3];
// console.log(...numbers); // Output: 1 2 3

// // Rest Operator - Collects multiple elements into an array
// function sumAll(...args) {
//   return args.reduce((acc, val) => acc + val, 0);
// }

// console.log(sumAll(1, 2, 3, 4)); // Output: 10

// function numbers1(x, y, z, ...nums) {
//   console.log(x, y, z, nums);
// }
// numbers1(1, 2, 3, 4, 5, 6, 7, 8); // Output: 1 2 3 [4,5,6,7,8]

// Q10 - Function scope
function scopeTest() {
  var functionScoped = "I am function scoped";
  let blockScoped = "I am block scoped";

  if (true) {
    var functionScoped = "I can be accessed anywhere in the function";
    let blockScoped = "I am only accessible within this block";
    console.log(blockScoped); // Accessible here
  }

  console.log(functionScoped); // Accessible here
  console.log(blockScoped);
}
scopeTest();
