/*
 * @lc app=leetcode id=383 lang=javascript
 *
 * [383] Ransom Note
 */

// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let rN = {}
    for(let i in magazine){
            rN[magazine[i]]= (rN[magazine[i]] || 0 ) +1
    }
    for(let j in ransomNote){
        if(!rN[ransomNote[j]])
            return false
         else {rN[ransomNote[j]]-=1}
    }
    return true
    
};
canConstruct("aa",
"aab")
// @lc code=end

