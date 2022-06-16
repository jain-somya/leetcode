/*
 * @lc app=leetcode id=58 lang=javascript
 *
 * [58] Length of Last Word
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    //let x=s.trim().split(' ')
    //console.log(x)
    let len=0
    for(i=s.length-1 ;i>=0;i--){
        if(s[i]!=' '){
            len+=1
        }
        if(s[i]==' '&& len>0){
            break
        }
    }
    return len
};
lengthOfLastWord('  fly me   to   the moon  ')
// @lc code=end

