/*
 * @lc app=leetcode id=704 lang=javascript
 *
 * [704] Binary Search
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  if (nums.length == 1) {
    if (nums[0] == target) return 0;
    else return -1;
  }
  let mid = nums.length / 2;
  let start = 0;
  let end = nums.length - 1;
  if(mid)
  while (start < end) {
      if(nums[mid] == target){
          return mid
      }
  
    if (target < nums[mid]) {
        
    
    } else {
      
    }
  }
  return -1;
};

// @lc code=end





var search = function (nums, target) {
   if(nums[0]==target){
       return
   }
}