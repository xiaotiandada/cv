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
        // hashmap 存储右侧第一个最大的值
        unordered_map<int, int> hashmap;
        // 维护一个单调递减栈
        stack<int> st;
        for (int i = nums2.size() - 1; i >= 0; --i) {
            int num = nums2[i];
            // 如果当前值大，出栈之前的值
            while (!st.empty() && num >= st.top()) {
                st.pop();
            }

            // 存储右侧第一个最大的值
            hashmap[num] = st.empty() ? -1 : st.top();
            st.push(num);
        }

        vector<int> res(nums1.size());
        for (int i = 0; i < nums1.size(); ++i) {
            res[i] = hashmap[nums1[i]];
        }
        return res;
    }
};
// @lc code=end

