/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
 */

// @lc code=start


// /**
//  * @param {ListNode} l1
//  * @param {ListNode} l2
//  * @return {ListNode}-
//  */
var addTwoNumbers = function(l1, l2) {
    let carry =0
    let h = new ListNode(0)  //  make a new node
    let head = h              // store head to return later
    let val = 0               // store sum
    if(!l1){
        return l2
    }
    if(!l2){
        return l1
    }
    while(l1 || l2 || carry ){
        if(l1){
            val += l1.val
            l1 = l1.next
        }
        if(l2){
            val += l2.val
            l2 = l2.next
        }
        if( val +carry >=10){
            val = val+ carry - 10
            carry = 1
        }
        else {
            val = val+ carry
            carry = 0
        }
        h.next = new ListNode(val)  // create new node with sum
        h= h.next     // point to next node
        val = 0  
    }
return head.next
};

// @lc code=end

