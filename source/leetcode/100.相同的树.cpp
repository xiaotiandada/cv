/*
 * @lc app=leetcode.cn id=100 lang=cpp
 *
 * [100] 相同的树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    bool isSameTree(TreeNode* p, TreeNode* q) {
        // 如果两个二叉树都为空，则两个二叉树相同。
        if (p == nullptr && q == nullptr) {
            return true;
        } else if (p == nullptr || q == nullptr) {
            // 如果两个二叉树中有且只有一个为空，则两个二叉树一定不相同。
            return false;
        } else if (p->val != q->val) {
            // 如果两个二叉树都不为空，那么首先判断它们的根节点的值是否相同，若不相同则两个二叉树一定不同
            return false;
        } else {
            // 若相同，再分别判断两个二叉树的左子树是否相同以及右子树是否相同。
            return isSameTree(p->left, q->left) && isSameTree(p->right, q->right);
        }
    }
};
// @lc code=end

