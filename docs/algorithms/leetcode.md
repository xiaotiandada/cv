---
title: leetcode
order: 1
---

### 283. 移动零

:one: :two: :three:

- http://www.leetcodecn.com/
- https://leetcode.cn/problems/move-zeroes/solution/yi-dong-ling-by-leetcode-solution/

**双指针解法**

```cpp | pure
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

```ts | pure
/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  const n = nums.length;
  let left = 0;
  let right = 0;

  while (right < n) {
    if (nums[right]) {
      // swap
      [nums[right], nums[left]] = [nums[left], nums[right]];
      left++;
    }
    right++;
  }
}
```

### 11. 盛最多水的容器

- https://leetcode.cn/problems/container-with-most-water/

**暴力解法**

:one: :two:

```cpp | pure
class Solution
{
public:
  int maxArea(vector<int> &height)
  {
    int result = 0;
    for (int i = 0; i < height.size() - 1; i++)
    {
      for (int j = i + 1; j < height.size(); j++)
      {

        int area = (j - i) * min(height[i], height[j]);

        result = max(result, area);
      }
    }

    cout << "result max: " << result << endl;
    return result;
  }
};
```

**双指针解法**

:one: :two:

```cpp | pure
  public:
  int maxArea(vector<int> &height)
  {
    int result = 0;
    for (int i = 0, j = height.size() - 1; i < j;)
    {

      int minHeight = height[i] < height[j] ? height[i++] : height[j--];
      result = max(result, (j - i + 1) * minHeight);
    }

    cout << "result max: " << result << endl;
    return result;
  }
```

### 70. 爬楼梯

- https://leetcode.cn/problems/climbing-stairs/
- https://leetcode.cn/problems/climbing-stairs/solution/pa-lou-ti-by-leetcode-solution/

![](https://i.imgur.com/vWvO72T.png)

```cpp ｜ pure
class Solution {
public:
    int climbStairs(int n) {

      if (n <= 3) {
        return n;
      }

      int p = 1;
      int q = 2;
      int r = 3;

      for (int i = 4; i <= n; i++) {
        p = q;
        q = r;
        r = p + q;
      }

      return r;
    }
};
```
