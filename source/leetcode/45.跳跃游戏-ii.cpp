/*
 * @lc app=leetcode.cn id=45 lang=cpp
 *
 * [45] 跳跃游戏 II
 * https://leetcode.cn/problems/jump-game-ii/solution/45-by-ikaruga/
 */

// [2,3,1,1,4]
// i = 0
// maxPos = 3
// end = 3
// ans = 1

// i = 1
// maxPos = 4
// end = 3
// ans = 1

// i = 2
// mmaxPos = 4
// end = 3
// ans = 1

// i = 3
// maxPos = 4
// end = 4
// ans = 2

// i = 4
// maxPos = 8
// end = 4
// ans = 2

// @lc code=start
class Solution {
public:
    int jump(vector<int>& nums) {
        int ans = 0;
        int end = 0;
        int maxPos = 0;
        for (int i = 0; i < nums.size() - 1; i++) {
            maxPos = max(maxPos, i + nums[i]);
            if (i == end) {
                end = maxPos;
                ans++;
            }
        }
        return ans;
    }
};
// @lc code=end

