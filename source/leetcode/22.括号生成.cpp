/*
 * @lc app=leetcode.cn id=22 lang=cpp
 *
 * [22] 括号生成
 * 方法一：暴力法
 */

// @lc code=start
class Solution {
public:

    bool valid(const string &str) {
        int balance = 0;
        
        for (char c: str) {
            if (c == '(')  {
                ++balance;
            } else {
                --balance;
            }

            if (balance < 0) {
                return false;
            }
        }

        return balance == 0;
    }

    void generate_all(string &current, int n, vector<string> &result) {
        if (n == current.size()) { 
            if (valid(current)) {
                result.push_back(current);
            }
            return;
        }

        current += '(';
        generate_all(current, n, result);
        current.pop_back();
        current += ')';
        generate_all(current, n, result);
        current.pop_back();
    }

    vector<string> generateParenthesis(int n) {
        vector<string> result;
        string current;

        generate_all(current, n * 2, result);

        return result;
    }
};
// @lc code=end

