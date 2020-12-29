// https://www.codewars.com/kata/59557b2a6e595316ab000046/train/javascript
// Convert a hash into an array. Nothing more, Nothing less.

// {name: 'Jeremy', age: 24, role: 'Software Engineer'}
// should be converted into

// [["name", "Jeremy"], ["age", 24], ["role", "Software Engineer"]]
// Note: The output array should be sorted alphabetically.

function convertHashToArray(hash){
  return Object.entries(hash).sort();
}

convertHashToArray({name: 'Jeremy', age: 24, role: 'Software Engineer'});