// https://www.codewars.com/kata/58644e8ddf95f81a38001d8d/train/javascript

// Given a number as a parameter, return an array containing strings which form a box.
// Like this:

// n = 5

// [
//   '-----',
//   '-   -',
//   '-   -',
//   '-   -',
//   '-----'
// ]
// n = 3

// [
//   '---',
//   '- -',
//   '---'
// ]

function box(n) {
  return [`-`.repeat(n), ...Array(n - 2).fill(`-${` `.repeat(n - 2)}-`), `-`.repeat(n)];
}
box(10);


// function box(n) {
//   const result = [];

//   for (let i = 0; i < n; i += 1) {
//     let item;
//     if (i === 0 || i === n - 1) {
//       item = '-'.repeat(n)
//     } else {
//       item = `-${' '.repeat(n - 2)}-`;
//     }
//     result.push(item)
//   }

//   return result;
// }