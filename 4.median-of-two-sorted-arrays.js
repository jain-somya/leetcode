/*
 * @lc app=leetcode id=4 lang=javascript
 *
 * [4] Median of Two Sorted Arrays
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let m = nums1.length;
  let n = nums2.length;
  let i = 0,
    j = 0;
  let arr = [];
  // merge both arrays
  while (i < m && j < n) {
    if (nums1[i] < nums2[j]) {
      arr.push(nums1[i]);
      i += 1;
    } else {
      arr.push(nums2[j]);
      j += 1;
    }
  }
  if (j != n) {
    while (j < n) {
      arr.push(nums2[j]);
      j += 1;
    }
  }
  if (i != m) {
    while (i < m) {
      arr.push(nums1[i]);
      i += 1;
    }
    ``;
  }
  let len = arr.length;
  if (len % 2 != 0) {
    return arr[Math.floor(len / 2)];
  } else {
    return (arr[len / 2 - 1] + arr[len / 2]) / 2;
  }
};
findMedianSortedArrays([1, 3], [2]);
// @lc code=end
