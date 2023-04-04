/*
 * @lc app=leetcode.cn id=257 lang=cpp
 *
 * [257] 二叉树的所有路径
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
    void construct_paths(TreeNode* root, string path, vector<string>& paths) {
        if (root != nullptr) {
            path += to_string(root->val); // 把当前节点的值添加到路径中。
            if (root->left == nullptr && root->right == nullptr) {
                 // 如果当前节点是叶子节点，把路径添加到 paths 中。
                paths.push_back(path);
            } else {
                path += "->"; // 如果当前节点不是叶子节点，添加箭头，继续递归遍历。
                construct_paths(root->left, path, paths);
                construct_paths(root->right, path, paths);
            }
        }
    }
    vector<string> binaryTreePaths(TreeNode* root) {
        vector<string> paths;
        construct_paths(root, "", paths);
        return paths;
    }
};
// @lc code=end

