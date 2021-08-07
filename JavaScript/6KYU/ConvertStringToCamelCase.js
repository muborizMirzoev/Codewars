// https://www.codewars.com/kata/517abf86da9663f1d2000003/train/javascript

// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).
//
// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

function toCamelCase(str) {
  let result = '';
  let idx;
  [...str].forEach((item, index) => {
    if (item === '_' || item === '-') {
      idx = index;
      return;
    }
    if (idx+1 === index) {
      result += item.toUpperCase();
    } else  {
      result+= item;
    }
  })
  return result;
}

console.log(toCamelCase("A-B-C"))