/*
 * @lc app=leetcode id=121 lang=javascript
 *
 * [121] Best Time to Buy and Sell Stock
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {

  let profit = 0;
  if (prices.length == 1) return profit;
  let min = prices[0];

  for (let i = 0; i < prices.length; i++) {
      if(prices[i]> min){
          if(profit < prices[i]- min){
              profit = prices[i]- min
          } 
      }
      else if(prices[i]<min){
          min = prices[i]
      }
      else{

      }
  }
  return profit
};


  // buy low sell high
  // if profit is more then only update, else update min

// @lc code=end
