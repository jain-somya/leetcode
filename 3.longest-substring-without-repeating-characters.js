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
 let maxLen=0
 let currStart =0
 let pos = 0
 while(pos<s.length){
    if(s[pos] in obj){
        currStart = obj[s[pos]] +1
        obj = {}   // new obj if element found, start again from that pos
        obj[s[currStart]] = currStart
        pos =  currStart+1
    }
    else{
        obj[s[pos]] = pos
        pos +=1
    }
   maxLen = maxLen > pos-currStart ? maxLen : pos-currStart
 
 }
 return maxLen
};
 // lengthOfLongestSubstring("dvdf")
// @lc code=end
