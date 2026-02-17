console.log("Currying in JavaScript");

// Currying is a functional programming technique where a function with multiple arguments is transformed into a sequence of functions that each take a single argument. It allows you to create new functions by partially applying arguments to an existing function.

//Q1 - sum(1)(1)(1) should return 3
function sum(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(sum(1)(1)(1));

// Q2 - Create a curried function for basic arithmetic operations (addition, multiplication, division, subtraction) that takes the operation as the first argument and then takes two numbers as the next arguments.

function arthmtcOperations(operations) {
  return function (a) {
    return function (b) {
      if (operations === "sum") return a + b;
      else if (operations === "multiply") return a * b;
      else if (operations === "divide") return a / b;
      else if (operations === "substract") return a - b;
    };
  };
}

console.log(arthmtcOperations("sum")(2)(3)); //5
console.log(arthmtcOperations("multiply")(2)(3)); //6
console.log(arthmtcOperations("divide")(10)(2)); //5
console.log(arthmtcOperations("substract")(5)(3)); //2
