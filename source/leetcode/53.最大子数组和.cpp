/*
 * @lc app=leetcode.cn id=53 lang=cpp
 *
 * [53] 最大子数组和
 * https://leetcode.cn/problems/maximum-subarray/solution/zui-da-zi-xu-he-by-leetcode-solution/#comment
 * 
 */

// [-2,1,-3,4,-1,2,1,-5,4]
// pre = 0, -2, 1, -2, 4, 3, 5, 6, 1, 5 
// maxAns = -2, -2, 1, 1, 4, 4, 5, 6, 6, 6

// @lc code=start
class Solution {
public:
    int maxSubArray(vector<int>& nums) {
        int pre = 0;
        int maxAns = nums[0];

        for (const auto &x: nums) {
            pre = max(pre + x, x);
            // printf("%d ", pre);
            maxAns = max(maxAns, pre);
            // printf("%d ", maxAns);
        }
        return maxAns;
    }
};
// @lc code=end

