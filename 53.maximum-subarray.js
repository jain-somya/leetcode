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
var maxSubArray = function(nums) {
    // let subArraySum = nums[0];
    // for(let i=1;i<= nums.length;i++){
    //     for(let j=0 ; j<=nums.length-i ; j++){
    //         currentSum = 0
    //         for(let k=j;k < j+i; k++){
    //             currentSum +=nums[k]
    //         }
    //         if( subArraySum < currentSum ){
    //             subArraySum = currentSum
    //         }
    //     }
    // }
    // for(let elIndex=0;elIndex < nums.length; elIndex++){
    //     currentSum = nums[elIndex]
    //     if( subArraySum < currentSum ){
    //         subArraySum = currentSum
    //      }
    // for(let len=1;len<= nums.length- elIndex;len++){
    //     currentSum +=nums[elIndex+len]
    //     if( subArraySum < currentSum ){
    //         subArraySum = currentSum
    //      }
       
    // }

    // }
    let maxSoFar =nums[0];
    let nextArraySum = nums[0];
    for(let i =1; i < nums.length;i++){
        nextArraySum +=nums[i]
        maxSoFar = maxSoFar > nextArraySum ? maxSoFar : nextArraySum
        // if(nums[i]<0){
        //     if( maxSoFar + nums[i] > 0 )
        //         maxSoFar +=nums[i]
        // }
        if(nums[i]<0)
            nextArraySum =0
    }
    
    return maxSoFar
};
// @lc code=end

