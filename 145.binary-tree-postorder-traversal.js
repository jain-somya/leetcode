/*
 * @lc app=leetcode id=145 lang=javascript
 *
 * [145] Binary Tree Postorder Traversal
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    let arr = []
    function foo(root){
    if(!root)return
    foo(root.left)
    foo(root.right)
        arr.push(root.val)

    }
    foo(root)
    return arr


};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = postorderTraversal;
// @after-stub-for-debug-end