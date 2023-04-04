/*
 * @lc app=leetcode.cn id=590 lang=cpp
 *
 * [590] N 叉树的后序遍历
 */

// @lc code=start
/*
// Definition for a Node.
class Node {
public:
    int val;
    vector<Node*> children;

    Node() {}

    Node(int _val) {
        val = _val;
    }

    Node(int _val, vector<Node*> _children) {
        val = _val;
        children = _children;
    }
};
*/

class Solution {
public:
    // 辅助函数
    void helper(const Node* root, vector<int>& res) {
        // 若节点为空则直接返回
        if (root == nullptr) {
            return;
        }

        // 递归遍历每一个子节点
        for (auto& ch : root->children) {
            helper(ch, res);
        }

        // 将当前节点的值加入结果数组中
        res.emplace_back(root->val);
    }

    vector<int> postorder(Node* root) {
        vector<int> res;
        helper(root, res);
        return res;
    }
};
// @lc code=end

