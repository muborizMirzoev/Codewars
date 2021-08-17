// https://leetcode.com/problems/counting-bits/

let countBits = function (n) {
  const result = [];
  for (let i = 0; i <= n; i++) {
    const bits = i.toString(2);
    result.push([...bits].reduce((a, b) => a + +b, 0))
  }
  return result
};
