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
    let start = 0
    let end = nums.length -1
    
    let mid = start + Math.ceil((end-start+1)/2 )
    while(start<end){
       // console.log(mid)
        if(nums[mid] == target){
            return mid
        }
        if(target <  nums[mid]) end = mid -1
        else start = mid
        mid = start + Math.ceil((end-start+1)/2)
    }

    if(start==end && nums[start]==target){ return start}
    return -1
};
//search([-1,0,3,5,9,12],
  //

//  9)

// @lc code=end