// https://leetcode.com/problems/contains-duplicate/

//option 1
let containsDuplicate = function(nums) {
  let set = new Set();
  for (let i of nums) {
    if (set.has(i)) {
      return true
    } else {
      set.add(i)
    }
  }
  return false
};

//option 2
let containsDuplicate = function(nums) {
  return [...new Set(nums)].length !== nums.length
};