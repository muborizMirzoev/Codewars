// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// V1
function findOdd(array) {
  return array.map((item) => array.filter((i) => item === i ? i : false))
              .filter((item) => item.length % 2 !== 0 ? item : false)[0][0]
  }


// V2
function findOdd2(array) {
let result = [];

for(let item of array) {
  let a = array.filter((i) => item === i ? i : false);
  if(a.length % 2 != 0) {
    result.push(a)
  }
}
return result[0][0]
}