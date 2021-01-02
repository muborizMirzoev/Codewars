// https://www.codewars.com/kata/529b54d9aba78c924d00088e/train/javascript

// Given a string and an object/array you need to return a formatted string. Replace all occurrences in the string where the name of a key in the object is surrounded by curly brackets.

// Inherited object properties should not be applied

// An example says more than a thousand words..

// Example using object

// var s = 'Hello {foo} - make me a {bar}';
// var o = {
//   foo : 'Jack',
//   bar : 'sandwich'
// };

// format(s, o); // "Hello Jack - make me a sandwich"
// Example using array

// var s = 'Hello {0} - make me a {1}';
// var a = ['Jack', 'sandwich'];

// format(s, a); // "Hello Jack - make me a sandwich"

const format = function (str, obj) {
  return str.split(' ').map((item) => {
    if (item.includes('}')) {
      const firstIndex = item.indexOf('{');
      const lastIndex = item.indexOf('}');
      const subItem = item.slice(firstIndex + 1, lastIndex);
      const remainingChar = item.substring(lastIndex + 1, item.length);

      if (obj.hasOwnProperty(subItem)) {
        return `${obj[subItem]}${remainingChar}`
      }
    }
    return item
  }).join(' ')
};



const s = 'Hello {foo} - make me a {bar}';
const o = {
  foo : 'Jack',
  bar : 'sandwich'
};

format(s, o); // "Hello Jack - make me a sandwich"