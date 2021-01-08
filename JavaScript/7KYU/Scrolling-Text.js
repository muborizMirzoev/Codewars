// https://www.codewars.com/kata/5a995c2aba1bb57f660001fd/train/javascript

// Let's create some scrolling text!

// Your task is to complete the function which takes a string, and returns an array with all possible rotations of the given string, in uppercase.

// Example
// scrollingText("codewars") should return:

// [ "CODEWARS",
//   "ODEWARSC",
//   "DEWARSCO",
//   "EWARSCOD",
//   "WARSCODE",
//   "ARSCODEW"
//   "RSCODEWA",
//   "SCODEWAR" ]

function scrollingText(text) {
  const upperCaseText = text.toUpperCase();

  return [...upperCaseText].map((item, i) => upperCaseText.slice(i, text.lingth) + upperCaseText.slice(0, i));
}

scrollingText("codewars")