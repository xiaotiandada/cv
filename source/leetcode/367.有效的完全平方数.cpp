/*
 * @lc app=leetcode.cn id=367 lang=cpp
 *
 * [367] 有效的完全平方数
 */

// 16
// left = 0
// right = 16
// mid = 8
// square = 64
// right = 7

// left = 0
// right = 7
// mid = 3 int
// square = 9
// right = 7
// left = 4

// left = 4
// right = 7
// mid = 5
// square = 25
// right = 6

// left = 4
// right = 6
// mid = 4
// square = 16
// true

// @lc code=start
class Solution {
public:
    bool isPerfectSquare(int num) {
        int left = 0;
        int right = num;
        while (left <= right) {
            int mid = left + (right - left) / 2;
            long square = (long) mid * mid;
            if (square < num) {
                left = mid + 1;
            } else if (square > num) {
                right = mid - 1;
            } else {
                return true;
            }
        }
        return false;
    }
};
// @lc code=end

