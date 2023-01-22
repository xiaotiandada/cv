/*
 * @lc app=leetcode.cn id=121 lang=cpp
 *
 * [121] 买卖股票的最佳时机
 * 方法二：一次遍历
 */

// maxProfit = 0
// minPrice = 1e9

// maxProfit = 0
// minPrice = 1

// maxProfit = 4
// minPrice = 1

// maxProfit = 5
// minPrice = 1

// @lc code=start
class Solution {
public:
    int maxProfit(vector<int>& prices) {
        int inf = 1e9;
        int minPrice = inf;
        int maxProfit = 0;
        for (int price : prices) {
            maxProfit = max(maxProfit, price - minPrice);
            minPrice = min(price, minPrice);
        }
        return maxProfit;
    }
};
// @lc code=end

