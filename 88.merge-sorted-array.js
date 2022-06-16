/*
 * @lc app=leetcode id=88 lang=javascript
 *
 * [88] Merge Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let pointer = nums1.length-1
    let i= m-1
    let j= n-1

    if(n==0){
     return nums1
    }
    if(m==0){
        for(let k=0;k<n; k++){
            nums1[k]= nums2[k]
        }
        return nums1
    }

while( pointer>=0){
    console.log(`i=${i}, j= ${j}`)
    console.log(`nums1=${nums1[i]},nums2 ${nums2[j]}`)

    if(j<0 || nums1[i]> nums2[j]){
        nums1[pointer] = nums1[i]
        i-=1
    }
    else if(j>=0){
        nums1[pointer] = nums2[j]
        j-=1
    }
    else {
        return nums1
    }
    
    pointer-=1
}
    
    return nums1
      
};
console.log(merge([4,0,0,0,0,0],
    1,
    [1,2,3,5,6],
    5))
// @lc code=end


// @after-stub-for-debug-begin
module.exports = merge;
// @after-stub-for-debug-end