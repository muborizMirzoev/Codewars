// https://leetcode.com/problems/missing-number/

const missingNumber = function(nums) {
  const result = new Array(nums.length+1).fill(-1);
  for(const num of nums) {
    result[num] = num;
  }
  return result.indexOf(-1);
};