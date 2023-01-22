/*
 * @lc app=leetcode.cn id=509 lang=cpp
 *
 * [509] 斐波那契数
 * https://en.wikipedia.org/wiki/Dynamic_programming
 */

// @lc code=start
class Solution {
public:
    map<int, int> m = {
        {0, 0},
        {1, 1}
    };
    int fib(int n) {
        if (m.count(n) == 0) {
            m[n] = fib(n - 1) + fib(n - 2);
        }
        return m[n];
    }
};
// @lc code=end


// var m := map(0 → 0, 1 → 1)
// function fib(n)
//     if key n is not in map m 
//         m[n] := fib(n − 1) + fib(n − 2)
//     return m[n]