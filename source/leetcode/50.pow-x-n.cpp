/*
 * @lc app=leetcode.cn id=50 lang=cpp
 *
 * [50] Pow(x, n)
 * 暴力
 */

// @lc code=start
class Solution {
public:
    double myPow(double x, int n) {

        if (n < 0) {
            return 1.0 / myPow(x, -n);
        }

        double result = 1;
        for (int i = 0; i < n; i++) {
            result *= x;
        }
        return result;
    }
};
// @lc code=end