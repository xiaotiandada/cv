/*
 * @lc app=leetcode.cn id=70 lang=cpp
 *
 * [70] 爬楼梯
 */

// @lc code=start
class Solution {
public:
    int climbStairs(int n) {

        // 0 0 1
        // 0 1 1
        // 1 2 3
        // 2 5 8

        if (n <= 3) {
            return n;
        }
            
        int p = 1, q = 2, r = 3;

        for (int i = 4; i <= n; i++) {
            p = q;
            q = r;
            r = p + q;
        }
        return r;
    }
};
// @lc code=end

