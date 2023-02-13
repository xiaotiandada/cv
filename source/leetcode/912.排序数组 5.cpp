/*
 * @lc app=leetcode.cn id=912 lang=cpp
 *
 * [912] 排序数组
 * mergeSort
 * 归并排序
 * 
 *
 */

// @lc code=start
class Solution {
public:

    void merge(vector<int>& nums, int low, int mid, int high) {
        int i, j, k;
        int n1 = mid - low + 1;
        int n2 = high - mid;
        vector<int> L(n1), R(n2);

        for (i = 0; i < n1; i++) {
            L[i] = nums[low + i];
        }

        for (j = 0; j < n2; j++) {
            R[j] = nums[mid + 1 + j];
        }

        i = 0, j = 0, k = low;

        while (i < n1 && j < n2) {
            if (L[i] <= R[j]) {
                nums[k] = L[i];
                i++;
            } else {
                nums[k] = R[j];
                j++;
            }
            k++;
        }
        
        while (i < n1) {
            nums[k] = L[i];
            i++;
            k++;
        }

        while (i < n2) {
            nums[k] = R[j];
            j++;
            k++;
        }
        
    }

    void mergeSort(vector<int>& nums, int low, int high) {
        if (low < high) {
            int mid = low + (high - low) / 2;

            mergeSort(nums, low, mid);
            mergeSort(nums, mid + 1, high);
            merge(nums, low, mid, high);
        }
    }

    vector<int> sortArray(vector<int>& nums) {
        int n = nums.size();
        
        mergeSort(nums, 0, n - 1);

        return nums;
    }
};
// @lc code=end

