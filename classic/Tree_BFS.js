/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 var levelOrder = function(root) {
    if(!root) return [];
    const res = [];
    const temp = [root];
    while(temp.length) {
        root = temp.shift();
        res.push(root.val);
        if(root.left) temp.push(root.left)
        if(root.right) temp.push(root.right)
    }
    return res
};
