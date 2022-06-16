/*
 * @lc app=leetcode id=118 lang=javascript
 *
 * [118] Pascal's Triangle
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let arr = [[1]]

    while (arr.length < numRows){
        let subArr = []
        for(let i=0; i<arr.length+1; i++ ){
            let left = i ==0 ? 0 : arr[arr.length-1][i-1] 
            let right = i==arr.length ? 0 : arr[arr.length-1][i] 
            subArr[i] = left+right
        }
        arr.push(subArr)
    }
    return arr
    
    
};
// @lc code=end

