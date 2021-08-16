const findDisappearedNumbers = function (nums) {
  const result = [];
  const uniqueNums = new Set(nums);
  for (let i = 1; i <= nums.length; i++) {
    if (!(uniqueNums.has(i))) result.push(i);
  }
  return result;
};