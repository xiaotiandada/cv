/*
 * @lc app=leetcode.cn id=198 lang=cpp
 *
 * [198] 打家劫舍
 * https://leetcode.cn/problems/house-robber/solution/da-jia-jie-she-by-leetcode-solution/
 * 动态规划
 */

// @lc code=start
class Solution {
public:
    int rob(vector<int>& nums) {
        if (nums.empty()) {
            return 0;
        }

        int size = nums.size();
        if (size == 1) {
            return nums[0];
        }

        vector<int> dp = vector<int>(size, 0);
        dp[0] = nums[0];
        dp[1] = max(nums[0], nums[1]);

        for (int i = 2; i < size; i++) {
            dp[i] = max(dp[i - 2] + nums[i], dp[i - 1]);
        }
        return dp[size - 1];
    }
};
// @lc code=end

