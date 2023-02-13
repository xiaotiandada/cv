/*
 * @lc app=leetcode.cn id=912 lang=cpp
 *
 * [912] 排序数组
 * 堆排序
 */

// @lc code=start
class Solution {
public:
    void heapSort(vector<int>& nums, int len) {
        priority_queue<int, vector<int>, greater<int>> pq;

        for (int i = 0; i < len; i++) {
            pq.push(nums[i]);
        }
        
        for (int i = 0; i < len; i++) {
            nums[i] = pq.top();
            pq.pop();
        }
    }

    vector<int> sortArray(vector<int>& nums) {
        int n = nums.size();

        heapSort(nums, n);
        
        return nums;
    }
};
// @lc code=end