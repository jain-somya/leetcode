/*
 * @lc app=leetcode id=15 lang=javascript
 *
 * [15] 3Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let a,
    b,
    output = [];
  for (let i = 0; i < nums.length - 2; i++) {
    a = nums[i];

    for (let j = i + 1; j < nums.length - 1; j++) {
      b = nums[j];
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[k] + a + b == 0) {
          output.push([a, b, nums[k]]);
        }
      }
    }
  }
  // cleaning output

  for(let i=output.length-1; i>0 ;i--){
    for(let j=output.length-2; i>1 ;j--){
        let match=0
        for(let initial=0; initial<3 ;initial++){
            for(let toMatch=0; toMatch<3 ;toMatch++){
                if(output[j][toMatch]== output[i][initial]){
                    match+=1
                }
            }
        }
        if(match==3){
            output.sl
        }
     
    }
     
  }
  return output
};
// @lc code=end
