console.log("Functions is loaded");

// What is function declaration -- Declaring a function. This can also be called defining a function(Function Definition)

function greet() {
  console.log("Hello World");
}

// Invoking or calling a function
greet();
greet();
greet(); // calling multiple times

//Q2 - What uis function expression -- Storing a function inside a variable or assigning a function to a variable

const sayHi = function () {
  // Function without a name is called anonymous function
  console.log("Hi There");
};
sayHi();

// Q3 - First Class Functions -- In JavaScript, functions are treated as first-class citizens. This means that functions can be assigned to variables, passed as arguments to other functions, and returned from other functions.
function add(num) {
  return num + num;
}

function getNum(func) {
  return console.log("Sum is " + func(5));
}

getNum(add);

// Q4 - What is IIFE (Immediateli Invoked Function Expression) -- A function runs as soons as it is defined.
(function () {
  console.log("IIFE Ran..");
})();

// Q5- IIEFE Output based questions

function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log("Count is " + count);
  };
}

const counter = outer();
counter(); // Count is 1
counter(); // Count is 2
counter(); // Count is 3

(function outFunc(x) {
  return (
    function inFunc(y) {
      console.log(x);
    },
    20
  );
})(10); // Output is 10

// Q6 - Funtion Hoisting -- In JavaScript, function declarations are hoisted to the top of their containing scope, meaning they can be called before they are defined in the code.

hoistedFunction(); // This works because of hoisting

function hoistedFunction() {
  console.log("This function is hoisted!");
}

nonhoistedFunction(); // This will throw an error

const nonhoistedFunction = function () {
  console.log("This function is not hoisted!");
}; //Uncaught ReferenceError: Cannot access 'nonhoistedFunction' before initialization
