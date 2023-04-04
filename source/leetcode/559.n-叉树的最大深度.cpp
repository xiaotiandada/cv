/*
 * @lc app=leetcode.cn id=559 lang=cpp
 *
 * [559] N 叉树的最大深度
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
    // 计算N叉树的最大深度
    int maxDepth(Node* root) {
        // 当根节点为空时，返回深度0
        if (root == nullptr) {
            return 0;
        }
        // 初始化子节点的最大深度为0
        int maxChildDepth = 0;
        // 获取根节点的所有子节点
        vector<Node*> children = root->children;
        for (auto child : children) { // 遍历子节点
            int childDepth = maxDepth(child);  // 递归计算每个子节点的深度
            maxChildDepth = max(maxChildDepth, childDepth); // 更新最大子节点深度
        }
        return maxChildDepth + 1;  // 返回最大深度加上根节点的深度1
    }
};
// @lc code=end

