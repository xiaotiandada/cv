/*
 * @lc app=leetcode.cn id=912 lang=cpp
 *
 * [912] 排序数组
 * 堆排序
 */

// @lc code=start
class Solution {
public:
    vector<int> sortArray(vector<int>& nums) {
        int n = nums.size();

        make_heap(nums.begin(), nums.end());
        sort_heap(nums.begin(), nums.end());

        return nums;
    }
};
// @lc code=end

