/*
 * @lc app=leetcode id=566 lang=javascript
 *
 * [566] Reshape the Matrix
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (mat, r, c) {
  if (mat.length * mat[0].length !== r * c) {
    return mat;
  }
  if (mat.length == r && mat[0].length == c) {
    return mat;
  }
  let result = [];
  for (let k = 0; k < r; k++) {
    result.push([]);
  }
  let row = 0;
  for (let j = 0; j < mat.length; j++) {
    console.log(row);
    for (let i = 0; i < mat[0].length; i++) {
      let el = mat[j][i];
      result[row].push(el);
      if (result[row].length == c) {
        row += 1;
      }
    }
  }

  return result;
};
console.log(matrixReshape([[1], [2], [3], [4]], 1, 4));
// @lc code=end
