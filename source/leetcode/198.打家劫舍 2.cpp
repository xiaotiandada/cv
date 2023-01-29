/*
 * @lc app=leetcode.cn id=198 lang=cpp
 *
 * [198] 打家劫舍
 * https://leetcode.cn/problems/house-robber/solution/da-jia-jie-she-by-leetcode-solution/
 * 动态规划 + 滚动数组
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

        int first = nums[0];
        int second = max(nums[0], nums[1]);

        for (int i = 2; i < size; i++) {
            int temp = second;
            second = max(first + nums[i], second);
            first = temp;
        }
        return second;
    }
};
// @lc code=end

