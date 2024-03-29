/*
 * @lc app=leetcode.cn id=104 lang=cpp
 *
 * [104] 二叉树的最大深度
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
    int maxDepth(TreeNode* root) {
        if (root == nullptr) {
            return 0;
        }
        // 二叉树的最大深度可以用广度优先搜索遍历每一层，记录层数即可。
        // 而最小深度不适合用 min 函数求解，因为对于某些特殊的情况，一个子树为空，另一个子树非空，此时如果按照 min 函数求解，则会返回 0，而实际上最小深度应该是非空子树的深度加一。
        // 因此，最小深度需要分别考虑左右子树为空和非空的情况，取其中较小值。
        return max(maxDepth(root->left), maxDepth(root->right)) + 1;
    }
};
// @lc code=end

