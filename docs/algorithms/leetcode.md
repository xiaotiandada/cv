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

### 1. 两数之和

- https://leetcode.cn/problems/two-sum/https://leetcode.cn/problems/two-sum/

**暴力解法**

```cpp | pure
class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        int n = nums.size();

        for (int i = 0; i < n; ++i) {
          for (int j = i + 1; j < n; ++j) {
            if (nums[i] + nums[j] == target) {
              return {i, j};
            }
          }
        }
        return {};
    }
};
```

### 15. 三数之和

- https://leetcode.cn/problems/3sum/
- https://leetcode.com/problems/3sum/solutions/1363302/c-brute-force-optimal-two-pointer-method-commented-time-o-n-2-auxiliary-space-o-1/?orderBy=most_votes&languageTags=cpp
- https://leetcode.cn/problems/3sum/solution/san-shu-zhi-he-by-leetcode-solution/

**暴力解法**

```cpp | pure
class Solution {
public:
    vector<vector<int>> threeSum(vector<int>& nums) {
        int len = nums.size();
        if (len == 0 || len < 3) {
            return {};
        }

        set<vector<int>> s;
        sort(nums.begin(), nums.end());

        for (int i = 0; i < len - 2; ++i) {
            for (int j = i + 1; j < len - 1; ++j) {
                for (int k = j + 1; k < len; ++k) {
                    if (nums[i] + nums[j] + nums[k] == 0) {
                        s.insert({nums[i], nums[j], nums[k]});
                    }
                }
            }
        }

        vector<vector<int>> ans(s.begin(), s.end());
        return ans;
    }
};
```

**排序 + 双指针**

```cpp
vector<vector<int>> threeSum(vector<int>& nums) {
    int n = nums.size();
    sort(nums.begin(), nums.end());
    vector<vector<int>> ans;

    // 枚举 a
    for (int first = 0; first < n; ++first) {
        // 需要和上一次枚举的数不相同
        if (first > 0 && nums[first] == nums[first - 1]) {
            continue;
        }

        // c 对应的指针初始指向数组的最右端
        int third = n - 1;
        int target = -nums[first];

        // 枚举 b
        for (int second = first + 1; second < n; ++second) {
            if (second > first + 1 && nums[second] == nums[second - 1]) {
                continue;
            }

            // 需要保证 b 的指针在 c 的指针的左侧
            while (second < third && nums[second] + nums[third] > target) {
                --third;
            }

            // 如果指针重合，随着 b 后续的增加
            // 就不会有满足 a+b+c=0 并且 b<c 的 c 了，可以退出循环
            if (second == third) {
                break;
            }

            if (nums[second] + nums[third] == target) {
                ans.push_back({nums[first], nums[second], nums[third]});
            }
        }
    }

    return ans;
}
```

### leetcode 插件

path:

- /source/leetcode/\*.cpp
