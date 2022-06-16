/*
 * @lc app=leetcode id=242 lang=javascript
 *
 * [242] Valid Anagram
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
     if(s.length!=t.length){
         return false
     }
    let targetMap = {}
    for(let i in s){
        if(s[i] in targetMap){
            targetMap[s[i]]+=1
        }
        else{
            targetMap[s[i]]=1
        }
    }
    let tMap = {}
    for(let i in t){
        if(t[i] in tMap){
            tMap[t[i]]+=1
        }
        else{
            tMap[t[i]]=1
        }
    }
    for(let i in tMap){
        if(!(i in targetMap)){
            return false
        }
        if(tMap[i]!=targetMap[i]){
            return false
        }
    }
    return true
    
};
// @lc code=end

