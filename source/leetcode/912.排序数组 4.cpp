/*
 * @lc app=leetcode.cn id=912 lang=cpp
 *
 * [912] 排序数组
 * quickSort
 * 快速排序
 * 
 *
 * 快速排序是一种分治的算法，其原理是选择一个关键值（又称轴点或者枢轴）作为基准，然后将数组分成两部分：小于等于这个关键值的数和大于这个关键值的数。最终，递归地对这两部分分别进行排序，最终完成整个数组的排序。
 * 这个代码实现了快速排序的关键步骤。首先，需要判断递归的终止条件：如果 low >= high，说明已经排序完成。然后，选择最后一个数作为关键值。从 low 到 high - 1 的数依次比较，如果比关键值小，则将其与前面的数交换位置。最后，将关键值与比它小的数的最后一个位置交换，得到了关键值的正确位置。最后，递归地调用 quickSort 函数对比关键值小的数和比关键值大的数进行排序。
 * 代码的最后，输出排序后的数组，得到排序结果：`1 2 3 4 5 6`。
 * 
 */

// @lc code=start
class Solution {
public:
    vector<int> quickSort(vector<int>& nums, int low, int high) {
        if (low < high) {
            int pivot = nums[high];
            int i = low - 1;

            for (int j = low; j <= high - 1; j++) {
                if (nums[j] < pivot) {
                    i++;
                    swap(nums[i], nums[j]);
                }
            }

            swap(nums[i + 1], nums[high]);
            int p = i + 1;

            quickSort(nums, low, p - 1);
            quickSort(nums, p + 1, high);
        }


        return nums;
    }

    vector<int> sortArray(vector<int>& nums) {
        int n = nums.size();
        
        return quickSort(nums, 0, n - 1);
    }
};
// @lc code=end

