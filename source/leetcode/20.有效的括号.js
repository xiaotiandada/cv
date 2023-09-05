/*
 * @lc app=leetcode.cn id=20 lang=cpp
 *
 * [20] 有效的括号
 * 方法一：栈
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const n = s.length;
  // 注意到有效字符串的长度一定为偶数，因此如果字符串的长度为奇数，我们可以直接返回 false，省去后续的遍历判断过程。
  if (n % 2 === 1) return false;

  const pairs = new Map([
    [')', '('],
    [']', '['],
    ['}', '{'],
  ]);

  const stk = [];
  for (let ch of s) {
    if (pairs.has(ch)) {
      // 可以取出栈顶的左括号并判断它们是否是相同类型的括号。如果不是相同的类型，或者栈中并没有左括号，那么字符串 s 无效，返回 false
      if (!stk.length || stk[stk.length - 1] !== pairs.get(ch)) {
        return false;
      }
      stk.pop();
    } else {
      stk.push(ch);
    }
  }

  // 在遍历结束后，如果栈中没有左括号，说明我们将字符串 sss 中的所有左括号闭合，返回 true，否则返回 false
  return !stk.length;
};
// @lc code=end
