/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}-
 */
var addTwoNumbers = function(l1, l2) {
    let head =l1
    let cary=0

    while (l1.next!==null || l2.next!==null ){
        if(l1.val+ l2.val+cary >9){
            l1.val =(l1.val+ l2.val+cary) %10
            cary=1
        }else{
            l1.val = l1.val+ l2.val +cary
            cary=0
        }
        l1= l1.next
        l2=l2.next
    }
    
    if(l1.next==null && l2.next!==null ){
        l1.next = l2.next
    }
    

    return head
};
// @lc code=end

