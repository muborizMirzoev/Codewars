// https://www.codewars.com/kata/55f81f9aa51f9b72a200002f/train/javascript

// Write a function called findUnique which returns the only unique number from an array.

// All numbers in the unsorted array are present twice, except the one you have to find. The numbers are always valid integer values between 1 and 2147483647, so no need for type and error checking. The array contains at least one number and may contain millions of numbers. So make sure your solution is optimized for speed.

// Example
// Input:

// [ 1, 8, 4, 4, 6, 1, 8 ]
// Expected output:

// 6



function findUnique(numbers) {
  const obj = {};

  for (let i of numbers) {
    !obj.hasOwnProperty(i) ? obj[i] = 1 : obj[i]++;
  }
  const result = Object.keys(obj).find((item) => obj[item] === 1);
  return +result
}

findUnique([1, 8, 4, 4, 6, 1, 8])

// Solution implement XOR
function findUnique2(numbers) {
  return numbers.reduce((a, b) => a ^ b);
}