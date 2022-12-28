/*
 * @lc app=leetcode.cn id=20 lang=cpp
 *
 * [20] 有效的括号
 * 方法一：栈
 */

// @lc code=start
class Solution {
public:
    bool isValid(string s) {
        int n = s.size();
        // 有效字符串的长度一定为偶数，因此如果字符串的长度为奇数，我们可以直接返回 \text{False}False，省去后续的遍历判断过程。
        if (n % 2 == 1) {
            return false;
        }

        unordered_map<char, char> pairs = {
            {')', '('},
            {']', '['},
            {'}', '{'}
        };

        stack<char> stk;

        for (char ch: s) {
            // 如果有右括号
            if (pairs.count(ch)) {
                // 栈空 或者顶部值不匹配
                if (stk.empty() || stk.top() != pairs[ch]) {
                    return false;
                }
                // 匹配出栈
                stk.pop();
            } else {
                // 左括号入栈
                stk.push(ch);
            }
        }
        // 在遍历结束后，如果栈中没有左括号，说明我们将字符串 s 中的所有左括号闭合，返回 True，否则返回 False。
        return stk.empty();
    }
};
// @lc code=end

