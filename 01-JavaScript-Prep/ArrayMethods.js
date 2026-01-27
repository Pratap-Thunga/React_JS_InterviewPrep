// What is Map();
// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
// pollyfill for map method
//map.((currenItem, i, array)={})

Array.prototype.myMap = function (Callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(Callback(this[i], i, this));
  }
  return result;
};

const nums = [1, 2, 3, 4, 5];
const multiply = nums.map((num, index, arry) => {
  return num * 2 + index;
  // 1 * 2 + 0 = 2
  // 2 * 2 + 1 = 5
  // 3 * 2 + 2 = 8
  // 4 * 2 + 3 = 11
  // 5 * 2 + 4 = 14
});

console.log(multiply);

// What is Filter();
// The filter() method creates a new array with all elements that pass the test implemented by the provided function.

// pollyfill for filter method

Array.prototype.myFilter = function (callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      result.push(this[i]);
    }
  }
  return result;
};

const ages = [32, 15, 19, 12, 25, 16, 8];
const agesCanVote = ages.filter((ages) => {
  return ages >= 18;
});

console.log(agesCanVote);

// What is Reduce();
// The reduce() method executes a reducer function(that you provide) on each element of the array, resulting in a single output value.

Array.prototype.myReduce = function (callback, initialValue) {
  let accumulator = initialValue;
  for (let i = 0; i < this.length; i++) {
    accumulator = accumulator
      ? callback(accumulator, this[i], i, this)
      : this[i];
  }
  return accumulator;
};

const numbers = [1, 2, 3, 4, 5];
const sum = numbers.myReduce((accumulator, currentValue, i, arr) => {
  return accumulator + currentValue;
}, 0);
// 0 + 1 = 1
// 1 + 2 = 3
// 3 + 3 = 6
// 6 + 4 = 10
// 10 + 5 = 15

console.log(sum);

let students = [
  { name: "Alice", score: 85 },
  { name: "Bob", score: 92 },
  { name: "Charlie", score: 78 },
  { name: "David", score: 90 },
];

//

let stdNames = [];
for (let i = 0; i < students.length; i++) {
  stdNames.push(students[i].name.toUpperCase());
}
console.log(stdNames);

const mapStuds = students.map((curr, i, arry) => {
  return curr.name.toUpperCase();
});

console.log(mapStuds);

const highScorers = students.filter((curr) => {
  return curr.score >= 80;
});

console.log(highScorers);

const sumOfAll = students.reduce((acc, current, i, arr) => {
  return acc + current.score;
}, 0);

console.log(sumOfAll);
