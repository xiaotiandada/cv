/*
 * @lc app=leetcode.cn id=1614 lang=cpp
 *
 * [1614] 括号的最大嵌套深度
 */

// @lc code=start
class Solution {
public:
    int maxDepth(string s) {
        int ans = 0;
        int size = 0;
        for (char ch : s) {
            if (ch == '(') {
                ++size;
                ans = max(ans, size);
            } else if (ch == ')') {
                --size;
            }
        }
        return ans;
    }
};
// @lc code=end

