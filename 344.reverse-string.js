/*
 * @lc app=leetcode id=344 lang=javascript
 *
 * [344] Reverse String
 */

// @lc code=start
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
 var reverseString = function(s) {
     console.log(s)
    if(s.length==1 || s.length==0 ){
        return s
    }
    let swap = s[s.length-1]
    s[s.length-1]=s[0]
    s[0] = swap
    console.log('s',s)
    reverseString(s.slice(1,s.length-1))
};
reverseString(["h","e","l","l","o"])
// @lc code=end

