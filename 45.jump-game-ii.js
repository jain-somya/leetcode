/*
 * @lc app=leetcode id=45 lang=javascript
 *
 * [45] Jump Game II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let jumps =1;
    let index=0
    while (index!=nums.length-1){
        let largest = nums[index]
        let ind = index
        for(i=index+1; i<=index+nums[index]; i++)
        {
            
            largest = largest>nums[i] ? largest : nums[i] 
            ind = 
        }
        index =
        jump +=1
    }
    return jumps
};
// @lc code=end

