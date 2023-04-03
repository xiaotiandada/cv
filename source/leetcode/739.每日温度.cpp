/*
 * @lc app=leetcode.cn id=739 lang=cpp
 *
 * [739] 每日温度
 */

// @lc code=start
class Solution {
public:
    vector<int> dailyTemperatures(vector<int>& temperatures) {
        int n = temperatures.size();
        vector<int> ans(n);
        stack<int> s;

        for (int i = 0; i < n; ++i) {
            // 74 > 73
            while (!s.empty() && temperatures[i] > temperatures[s.top()]) {
                // 0
                int previousIndex = s.top();
                // ans[0] = 1 - 0 = 1
                ans[previousIndex] = i - previousIndex;
                // s = []
                s.pop();
            }
            s.push(i);
        }

        return ans;
    }
};
// @lc code=end

