/*
 * @lc app=leetcode id=27 lang=javascript
 *
 * [27] Remove Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    for(let i=nums.length-1 ; i>=0;i--){
        if(nums[i]===val){
            for(let j=i;j<nums.length; j++){
                if(j===nums.length-1 || nums[j+1] === '_'){
                    nums[j] ='_'
                    break
                }
                nums[j] = nums[j+1]
            }
        }
    }
    return nums.indexOf('_')!==-1 ? nums.indexOf('_') : nums.length
};
// @lc code=end

