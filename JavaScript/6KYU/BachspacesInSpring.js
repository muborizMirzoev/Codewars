// Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

// Your task is to process a string with "#" symbols.

// Examples
// "abc#d##c"      ==>  "ac"
// "abc##d######"  ==>  ""
// "#######"       ==>  ""
// ""              ==>  ""
function cleanString([...s]) {
  let result = []
  for(let i = 0; i < s.length; i += 1) {
  s[i] === '#' ? result.pop() : result.push(s[i]);
}
return result.join('');
};