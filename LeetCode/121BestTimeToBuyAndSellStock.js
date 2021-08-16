// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

const maxProfit = function (prices) {
  let buyDay = prices[0];
  let result = 0;

  for (let price of prices) {
    buyDay = Math.min(buyDay, price);
    result = Math.max(result, price - buyDay)
  }
  return result;

};