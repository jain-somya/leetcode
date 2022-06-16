/*
 * @lc app=leetcode id=94 lang=javascript
 *
 * [94] Binary Tree Inorder Traversal
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
var inorderTraversal = function(root) {
    let stack = []
    let arr=[ ]
    if(!root)return arr
    stack.push(root)
    stack.push(root.left)
    while (stack.length){
        if(root.left){
            stack.push(root)
            root=root.left
        }
        else{
            arr.push
        }
    }
    
};
// @lc code=end

