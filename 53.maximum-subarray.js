/*
 * @lc app=leetcode id=53 lang=javascript
 *
 * [53] Maximum Subarray
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  // maxtillnow update
  let curr = nums[0];
  let maxtillnow = curr;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > 0) {
      if (curr > 0) {
        curr += nums[i];
      } else {
        curr = nums[i];
      }
    } else {
      curr = nums[i] + curr > 0 ? nums[i] + curr : nums[i];
    }
    maxtillnow = curr > maxtillnow ? curr : maxtillnow;
  }
  return maxtillnow;
};

// -- brute force : all subarrays

// -- kadane's algorithm  : keep track of current sum(add only if more than 0)

// @lc code=end
