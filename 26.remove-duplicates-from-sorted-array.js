/*
 * @lc app=leetcode id=26 lang=javascript
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(nums.length==1){
        return nums
    }
    let curr = 0
    for(let toCompare=1 ; toCompare<nums.length; toCompare++){
        if(nums[curr]==nums[toCompare]){
            nums[toCompare]='_'
        }
        else{
            if(curr+1!=toCompare){
                nums[curr+1]=nums[toCompare]
                nums[toCompare]='_'
            }
         curr+=1
        }
    }
    return nums.indexOf('_')==-1? nums.length: nums.indexOf('_')
};



// Two pointers

// @lc code=end

