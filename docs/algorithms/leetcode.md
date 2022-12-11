---
title: leetcode
order: 1
---

### 283. 移动零

- http://www.leetcodecn.com/
- https://leetcode.cn/problems/move-zeroes/solution/yi-dong-ling-by-leetcode-solution/

```c++ | pure
class Solution {
public:
    void moveZeroes(vector<int>& nums) {
      // 使用双指针，左指针指向当前已经处理好的序列的尾部，右指针指向待处理序列的头部。
      int n = nums.size();
      int left = 0;
      int right = 0;

      while (right < n) {
          // 每次右指针指向非零数
          if (nums[right]) {
              // 则将左右指针对应的数交换
              swap(nums[left], nums[right]);
              // 同时左指针右移
              left++;
          }
          // 右指针不断向右移动
          right++;
      }
    }
};
```
