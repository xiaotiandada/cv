/*
 * @lc app=leetcode.cn id=55 lang=cpp
 *
 * [55] 跳跃游戏
 * https://leetcode.cn/problems/jump-game/solution/tiao-yue-you-xi-by-leetcode-solution/
 * 方法一：贪心
 */

// [2,3,1,1,4]
// [3,2,1,0,4]

// @lc code=start
class Solution {
public:
    bool canJump(vector<int>& nums) {
        int n = nums.size();
        // 依次遍历数组中的每一个位置，并实时维护 最远可以到达的位置
        int rightmost = 0;
        for (int i = 0; i < n; ++i) {
            if (i <= rightmost) {
                rightmost = max(rightmost, i + nums[i]);
                // 如果 最远可以到达的位置 大于等于数组中的最后一个位置，那就说明最后一个位置可达，我们就可以直接返回 True 作为答案
                if (rightmost >= n - 1) {
                    return true;
                }
            }
        }
        // 反之，如果在遍历结束后，最后一个位置仍然不可达，我们就返回 False 作为答案。
        return false;
    }
};
// @lc code=end

