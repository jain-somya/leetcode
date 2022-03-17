/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let prefix=''
    i =1;
    while(i<= strs[0].length ){
        let toCompare = strs[0].substr(0,i)
        check = 0 
        strs.forEach(element => {if(element.indexOf(toCompare)!==0 ) check=-1})
        if(check===-1){
            return prefix
        }
        prefix = toCompare
        i++;
    }
    return prefix
};
// @lc code=end

