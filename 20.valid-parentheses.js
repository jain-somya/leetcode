/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const open = ['{','[','(']
    const close =['}',']',')']
    
    if(s.length %2 !==0 || close.includes(s.charAt(0)) || open.includes(s.charAt(s.length-1)))
     return false
    arr=[]
    for(let i=0 ;i<s.length; i++){
        arr.push(s[i])
        if(arr.length>1  ){
            let len = arr.length
            if(open.includes(arr[len-2]) && close.includes(arr[len-1])){
             if(open.indexOf(arr[len-2])=== close.indexOf(arr[len-1])){
                arr.pop()
                arr.pop()
            }
        }
        }
    }
    if(arr.length===0)
        return true
    return false
};
// @lc code=end

