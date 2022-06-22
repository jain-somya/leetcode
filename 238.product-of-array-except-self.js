/*
 * @lc app=leetcode id=238 lang=javascript
 *
 * [238] Product of Array Except Self
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let prod=1
    let result = []
    for(let i in nums){
        result[i] = prod
        prod *= nums[i]
    }
     prod =1
    for(let j=result.length-1; j>=0; j--){
        result[j] *= prod
        prod *= nums[j]
    }
    return result
    
};
// @lc code=end

