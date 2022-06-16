/*
 * @lc app=leetcode id=36 lang=javascript
 *
 * [36] Valid Sudoku
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  // check Rows
  for (let k = 0; k < 9; k++) {
    for (let i = 0; i < 8; i++) {
      for (let j = i + 1; j < 9; j++) {
        if (board[k][i] == board[k][j]) {
          return false;
        }
      }
    }
  }
  //check columns
  for (let k = 0; k < 9; k++) {
    for (let j = 0; j < 8; j++) {
      for (let i = j + 1; i < 9; i++) {
        if (board[j][k] == board[i][k]) {
          return false;
        }
      }
    }
  }

  //todo
  
  // check grids 
  for (let k = 0; k < 9; k+=3) {
    for (let o = 0; o < 9; o+=3) {
    for (let j = 0; j < 3; j++) {
      for (let i = j + 1; i < 3; i++) {
        if (board[k+j][o+i] == board[k+j][o+i]) {
          return false;
        }
      }
    }
}
  }


  return true;
};
// @lc code=end
