/*
 * @lc app=leetcode id=83 lang=javascript
 *
 * [83] Remove Duplicates from Sorted List
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
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    var currentNode = head
    while(currentNode && currentNode.next){
        if(currentNode.next.val==currentNode.val){
            currentNode.next = currentNode.next.next? currentNode.next.next : null
        }
        else{
            currentNode = currentNode.next
        }
    }
    return head
};
// @lc code=end

