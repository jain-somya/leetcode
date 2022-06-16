/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
 let obj ={}
 let len = 0
 let start = 0
 let maxLen=0
 for(let i=0 ;i<s.length; i++){
     if(s[i] in obj){
         start = obj[s[i]] +1
         if(i==obj[s[i]]+1){
            obj={}
         }
     }
     obj[s[i]]= i
     len = i-start +1
     console.log('i',i)

     console.log('start',start)
     console.log('len', len)
     console.log(obj)
     maxLen = maxLen >len ? maxLen : len
 }
 return maxLen
};
lengthOfLongestSubstring("wobgrovw")
// @lc code=end
