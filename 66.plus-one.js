/*
 * @lc app=leetcode id=66 lang=javascript
 *
 * [66] Plus One
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let resultingArray=digits, carry;

  for (i = digits.length - 1; i >= 0; i--) {
    let lastDigit = digits[i] + 1;
    if (lastDigit == 10) {
      resultingArray[i]=0
      carry = 1;
    } else {
      resultingArray[i]=lastDigit
      carry = 0;
    }
    if (carry == 0) {
    break;
}
  
  }
  if (carry == 1) resultingArray = [1, ...resultingArray];

  return resultingArray;
};
//plusOne([8,9,9,9]);
// @lc code=end
