// What is Map();
// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

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

const ages = [32, 15, 19, 12, 25, 16, 8];
const agesCanVote = ages.filter((ages) => {
  return ages >= 18;
});

console.log(agesCanVote);

// What is Reduce();
// The reduce() method executes a reducer function(that you provide) on each element of the array, resulting in a single output value.

const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue, i, arr) => {
  return accumulator + currentValue;
}, 0);
// 0 + 1 = 1
// 1 + 2 = 3
// 3 + 3 = 6
// 6 + 4 = 10
// 10 + 5 = 15

console.log(sum);
