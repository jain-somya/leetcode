/*
 * @lc app=leetcode id=387 lang=javascript
 *
 * [387] First Unique Character in a String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  if (s.length == 1) {
    return s[0];
  }
  for (let i = 0; i < s.length-1; i++) {
    let count = 0;
    for (let j = i + 1; j < s.length; j++) {
      if (i != j) {
        if (count > 0) {
          break;
        }
        if (s[j] == s[i]) {
          count += 1;
        }
      }
    }
    console.log(count)
    if (count == 0) {
      return i;
    }
  }
  return -1;
};
firstUniqChar("aabb");
// @lc code=end
