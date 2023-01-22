/*
 * @lc app=leetcode.cn id=509 lang=cpp
 *
 * [509] 斐波那契数
 * https://en.wikipedia.org/wiki/Dynamic_programming
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
        } else {
            int previousFib = 0;
            int currentFib = 1;
            for (int i = 0; i < n - 1; ++i) {
                int newFib = previousFib + currentFib;
                previousFib = currentFib;
                currentFib = newFib;
            }
            return currentFib;
        }
    }
};
// @lc code=end


// function fib(n)
//     if n = 0
//         return 0
//     else
//         var previousFib := 0, currentFib := 1
//         repeat n − 1 times // loop is skipped if n = 1
//             var newFib := previousFib + currentFib
//             previousFib := currentFib
//             currentFib  := newFib
//         return currentFib