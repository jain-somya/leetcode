/*
 * @lc app=leetcode id=28 lang=javascript
 *
 * [28] Implement strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if(needle.length==0){
        return 0
    }
    if(haystack.length==0){
        return -1
    }
    for(let i=0; i<=haystack.length-needle.length; i++){
        if(haystack[i]==needle[0]){
            let curr = 0
            while(curr<needle.length){
                if(haystack[i+curr]==needle[curr]){
                    curr++
                }
                else{
                    break
                }
            }
            if(curr==needle.length){
                return i
            }
        }
    }


    return -1
    
};
// @lc code=end

