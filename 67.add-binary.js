/*
 * @lc app=leetcode id=67 lang=javascript
 *
 * [67] Add Binary
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let carry =0
    const d1, d2 = a.length>b.length ? a :b 
    let answer=''
    for(j=0; j<d1.length ;j++){
        let digit;
        if(j< d2.length)
        digit, carry = addDigits(d1.charAt(d1.length- j-1),d2.charAt(d1.length- j-1))
        else 
        digit, carry = addDigits(d1.charAt(d1.length- j-1),0)

        digit, carry = addDigits(digit,carry)
    }
    function addDigits(x,y){
        if(x==y==1){
            return 0,1
        }
        else if(x==y==0){
            return 0,0
        }
        else{
            return 1,0
        }// return digit, carry
    }


    function convertToDec(x){
        let val=0
        for(i=0;i<x.length;i++){
            val +=x.charAt(i) * (2** (x.length- i-1))
        }
        return val
    }
    function convertToBin(x){
        let val=0
        for(i=0;i<x.length;i++){
            val +=x.charAt(i) * (2** x.length- i-1)
        }
        return val
    }

    
};
// @lc code=end

