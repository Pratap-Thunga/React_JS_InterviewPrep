// Closure - A closure is a function that has access to its own scope, the outer function's scope and the global scope. It allows a function to access varibales from
// an enclosing scope even after the outer function has finished executing.
let globalVariable = "I am a global variable";
function outerFunction() {
  let outerVariablle = "I am from outer function";

  function innerFunction() {
    let innerVariable = "I am from inner function";
    console.log(innerVariable); // inner function can access its own variable
    console.log(globalVariable); // inner function can access global variable
    console.log(outerVariablle); // inner function can access outer variable
  }
  innerFunction();
}
outerFunction();
