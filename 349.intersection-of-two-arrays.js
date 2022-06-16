/*
 * @lc app=leetcode id=349 lang=javascript
 *
 * [349] Intersection of Two Arrays
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  if (nums1.length == 0 || nums2.length == 0) {
    return [];
  }
  let obj1 = {};
  for (let i = 0; i < nums1.length; i++) {
    if (nums1[i] in obj1) {
      obj1[nums1[i]] += 1;
    } else {
      obj1[nums1[i]] = 1;
    }
  }
  let obj2 = {};
  for (let i = 0; i < nums2.length; i++) {
    if (nums2[i] in obj2) {
      obj2[nums2[i]] += 1;
    } else {
      obj2[nums2[i]] = 1;
    }
  }
  let arr = [];
  for (let j in obj1) {
    if (j in obj2) {      
        arr.push(j);
    }
  }
  return arr;
};
console.log(intersection([1,2,2,1], 
    [2,2]))
// @lc code=end
