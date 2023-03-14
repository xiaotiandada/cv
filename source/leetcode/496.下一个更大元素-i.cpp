/*
 * @lc app=leetcode.cn id=496 lang=cpp
 *
 * [496] 下一个更大元素 I
 * 暴力解法
 */

// @lc code=start
class Solution {
public:
    vector<int> nextGreaterElement(vector<int>& nums1, vector<int>& nums2) {
        int m = nums1.size();
        int n = nums2.size();
        vector<int> res(m);

        // 遍历 nums1
        for (int i = 0; i < m; i++) {
            int j = 0;
            // 遍历 nums2，找到相同的
            while (j < n && nums2[j] != nums1[i]) {
                j++;
            }
            // 相同的坐标往后 + 1
            int k = j + 1;
            // 遍历 nums2 找到大于第一个大于的元素
            while (k < n && nums2[k] < nums2[j]) {
                k++;
            }
            // 返回找到的元素
            res[i] = k < n ? nums2[k] : -1;
        }

        return res;
    }
};
// @lc code=end

