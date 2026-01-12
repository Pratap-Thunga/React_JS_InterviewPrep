console.log("hello world");
//scope example -- Scope tells the accessibility of variables where they are declared.
// Global Scope - Variables declared outside of any function or block have global scope and can be accessed from anywhere in the code.
var a = 10; // global scope
console.log(a); // accessible
function globalScopeExample() {
  console.log(a); // accessible
}

globalScopeExample();

//function scope - Variables declared within a function are only accessible within that function.
function functionScopeExample() {
  var b = 20; // function scope
  console.log(b); // accessible
}

functionScopeExample();
// console.log(b); // Uncaught ReferenceError: b is not defined

//block scope - Variables declared with let or const within a block (e.g., inside curly braces {}) are only accessible within that block.
if (true) {
  let c = 30; // block scope
  console.log(c); // accessible
}
// console.log(c); // Uncaught ReferenceError: c is not defined.

//shadowing example
let d = 40; // global scope
function shadowingExample() {
  let d = 50; // local scope (shadows global d)
  console.log(d); // outputs 50
}
shadowingExample();
console.log(d); // outputs 40
// var can be showded by let and const but let and const cannot be shadowed by var

//declaration example -
var e; // declaration
let f;
const g = 60; // we cannot declare a const without initializing it

//initialization example
var h = 70; // initialization
let i = 80;
const j = 90;

//re-initialization example
var k = 100;
k = 110; // re-initialization allowed for var

let l = 120;
l = 130; // re-initialization allowed for let

const m = 140;
// m = 150; // Uncaught TypeError: Assignment to constant variable.

//hoisting example
console.log(n); // undefined due to hoisting
var n = 160;

console.log(o); // Uncaught ReferenceError: Cannot access 'o' before initialization
let o = 170;

console.log(p); // Uncaught ReferenceError: Cannot access 'p' before initialization
const p = 180;
