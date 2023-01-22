/*
 * @lc app=leetcode.cn id=55 lang=cpp
 *
 * [55] 跳跃游戏
 * https://leetcode.cn/problems/jump-game/solution/55-by-ikaruga/
 */

// [2,3,1,1,4]
// [3,2,1,0,4]

// @lc code=start
class Solution {
public:
    bool canJump(vector<int>& nums) {
        int k = 0;
        for (int i = 0; i < nums.size(); i++) {
            if (i > k) {
                return false;
            }
            k = max(k, i + nums[i]);
        }
        return true;
    }
};
// @lc code=end

