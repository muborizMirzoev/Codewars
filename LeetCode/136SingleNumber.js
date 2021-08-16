// https://leetcode.com/problems/single-number/

let singleNumber = function(nums) {
  const obj = {};
  for (let num of nums) {
    if (obj.hasOwnProperty(num)) {
      obj[num]++
    } else {
      obj[num] = 1;
    }
  }
  for (let num in obj) {
    if (obj[num] === 1) return num
  }
};