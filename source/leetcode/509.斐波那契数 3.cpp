/*
 * @lc app=leetcode.cn id=509 lang=cpp
 *
 * [509] 斐波那契数
 * https://leetcode.cn/problems/fibonacci-number/solution/fei-bo-na-qi-shu-by-leetcode-solution-o4ze/
 * 方法一：动态规划
 */

// 1，1，2，3，5，8，13，21，34，55
// 1 1

// 4
// i = 2
// p = 0
// q = 1
// r = p + q = 1

// i = 3
// p = 1
// q = 1
// r = 2

// i = 4
// p = 1
// q = 2
// r = 3

// i = 5
// p = 2
// q = 3
// r = 5

// i = 6
// p = 3
// q = 5
// r = 8

// @lc code=start
class Solution {
public:
    int fib(int n) {
        if (n < 2) {
            return n;
        }

        int p = 0;
        int q = 0;
        int r = 1;

        for (int i = 2; i <= n; ++i) {
            p = q;
            q = r;
            r = p + q;
        }
        return r;
    }
};
// @lc code=end