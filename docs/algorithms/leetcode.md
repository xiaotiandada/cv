---
title: leetcode
order: 1
---

### 155.最小栈

```cpp
/*
 * @lc app=leetcode.cn id=155 lang=cpp
 *
 * [155] 最小栈
 */

// @lc code=start
class MinStack {
    stack<int> x_stack;
    stack<int> min_stack;
public:
    MinStack() {
        min_stack.push(INT_MAX);
    }

    void push(int val) {
        x_stack.push(val);
        min_stack.push(min(min_stack.top(), val));
    }

    void pop() {
        x_stack.pop();
        min_stack.pop();
    }

    int top() {
        return x_stack.top();
    }

    int getMin() {
        return min_stack.top();
    }
};

/**
 * Your MinStack object will be instantiated and called as such:
 * MinStack* obj = new MinStack();
 * obj->push(val);
 * obj->pop();
 * int param_3 = obj->top();
 * int param_4 = obj->getMin();
 */
// @lc code=end


```

### 20.有效的括号

```cpp
/*
 * @lc app=leetcode.cn id=20 lang=cpp
 *
 * [20] 有效的括号
 * 方法一：栈
 */

// @lc code=start
class Solution {
public:
    bool isValid(string s) {
        int n = s.size();
        // 有效字符串的长度一定为偶数，因此如果字符串的长度为奇数，我们可以直接返回 \text{False}False，省去后续的遍历判断过程。
        if (n % 2 == 1) {
            return false;
        }

        unordered_map<char, char> pairs = {
            {')', '('},
            {']', '['},
            {'}', '{'}
        };

        stack<char> stk;

        for (char ch: s) {
            // 如果有右括号
            if (pairs.count(ch)) {
                // 栈空 或者顶部值不匹配
                if (stk.empty() || stk.top() != pairs[ch]) {
                    return false;
                }
                // 匹配出栈
                stk.pop();
            } else {
                // 左括号入栈
                stk.push(ch);
            }
        }
        // 在遍历结束后，如果栈中没有左括号，说明我们将字符串 s 中的所有左括号闭合，返回 True，否则返回 False。
        return stk.empty();
    }
};
// @lc code=end


```

### 206.反转链表

```cpp
/*
 * @lc app=leetcode.cn id=206 lang=cpp
 *
 * [206] 反转链表
 * 方法一：迭代
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    ListNode* reverseList(ListNode* head) {
        ListNode* prev = nullptr;
        ListNode* curr = head;
        while (curr)
        {
            // 保存下一个节点
            ListNode* next = curr->next;
            // 当前节点设置上一个节点
            curr->next = prev;
            // 上一个节点设置为当前节点
            prev = curr;
            // 当前节点设置为下一个
            curr = next;
        }
        return prev;

    }
};
// @lc code=end


/*
 * @lc app=leetcode.cn id=206 lang=cpp
 *
 * [206] 反转链表
 * 方法二：递归
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    ListNode* reverseList(ListNode* head) {
        if (!head || !head->next) {
            return head;
        }

        ListNode* newHead = reverseList(head->next);
        head->next->next = head;
        head->next = nullptr;
        return newHead;
    }
};
// @lc code=end


```

### 24.两两交换链表中的节点

```cpp
/*
 * @lc app=leetcode.cn id=24 lang=cpp
 *
 * [24] 两两交换链表中的节点
 * 方法一：递归
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    ListNode* swapPairs(ListNode* head) {
        if (head == nullptr || head->next == nullptr) {
            return head;
        }

        ListNode* newHead = head->next;
        head->next = swapPairs(newHead->next);
        newHead->next = head;
        return newHead;
    }
};
// @lc code=end


```

### 3sum

```cpp
//
// Created by xiaotian on 2022/12/24.
//
#include <iostream>
#include <vector>
#include <algorithm>
#include <set>

using namespace std;

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

    vector<vector<int>> threeSum1(vector<int>& nums) {
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
};

int main()
{
    Solution SolutionFn;

    // 2,7,11,15
    vector<int> test = { -1,0,1,2,-1,-4 };

    vector<vector<int>> result = SolutionFn.threeSum1(test);

    for (int i = 0; i < result.size(); i++) {
        cout << "result" << "[" << result[i][0] << "," << result[i][1]  << ',' << result[i][2] << "]" << endl;
    }

}

```

### 705.设计哈希集合

```cpp
/*
 * @lc app=leetcode.cn id=705 lang=cpp
 *
 * [705] 设计哈希集合
 */

// @lc code=start
class MyHashSet {
    vector<list<int>> data;
    static const int base = 769;
    static int hash(int key) {
        return key % base;
    }
public:
    /** Initialize your data structure here. */
    MyHashSet(): data(base) {

    }

    void add(int key) {
        int h = hash(key);
        for (auto it = data[h].begin(); it != data[h].end(); it++) {
            if (*it == key) {
                return;
            }
        }
        data[h].push_back(key);
     }

    void remove(int key) {
        int h = hash(key);
        for (auto it = data[h].begin(); it!= data[h].end(); it++) {
            if (*it == key) {
                data[h].erase(it);
                return;
            }
        }
    }

    bool contains(int key) {
        int h = hash(key);
        for (auto it = data[h].begin(); it!= data[h].end(); it++) {
            if (*it == key) {
                return true;
            }
        }
        return false;
    }
};

/**
 * Your MyHashSet object will be instantiated and called as such:
 * MyHashSet* obj = new MyHashSet();
 * obj->add(key);
 * obj->remove(key);
 * bool param_3 = obj->contains(key);
 */
// @lc code=end


```

### 706.设计哈希映射

```cpp
/*
 * @lc app=leetcode.cn id=706 lang=cpp
 *
 * [706] 设计哈希映射
 */

// @lc code=start
class MyHashMap {
    vector<list<pair<int, int>>> data;
    static const int base = 769;
    static int hash(int key) {
        return key % base;
    }
public:
    /** Initialize your data structure here. */
    MyHashMap(): data(base) {

    }

    /** value will always be non-negative. */
    void put(int key, int value) {
        int h = hash(key);
        for (auto it = data[h].begin(); it != data[h].end(); it++) {
            if ((*it).first == key) {
                (*it).second = value;
                return;
            }
        }
        data[h].push_back(make_pair(key, value));
    }

    /** Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key */
    int get(int key) {
        int h = hash(key);
        for (auto it = data[h].begin(); it!= data[h].end(); it++) {
            if ((*it).first == key) {
                return (*it).second;
            }
        }
        return -1;
    }

    /** Removes the mapping of the specified value key if this map contains a mapping for the key */
    void remove(int key) {
        int h = hash(key);
        for (auto it = data[h].begin(); it!= data[h].end(); it++) {
            if ((*it).first == key) {
                data[h].erase(it);
                return;
            }
        }
    }
};

/**
 * Your MyHashMap object will be instantiated and called as such:
 * MyHashMap* obj = new MyHashMap();
 * obj->put(key,value);
 * int param_2 = obj->get(key);
 * obj->remove(key);
 */
// @lc code=end


```

### climbing-stairs

```cpp
#include <iostream>
#include <vector>
using namespace std;

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

int main()
{
    Solution SolutionFn;
    int result = SolutionFn.climbStairs(5);

    cout << result << endl;
}

```

### container-with-most-water

```cpp
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

class Solution
{
public:
  int maxArea(vector<int> &height)
  {
    int result = 0;
    int len = height.size();

    for (int i = 0; i < len - 1; i++) {
      for (int j = i + 1; j < len; j++) {

        int area = (j - i) * min(height[i], height[j]);

        result = max(result, area);
      }
    }

    cout << "result max: " << result << endl;
    return result;
  }

  public:
  int maxArea1(vector<int> &height)
  {
    int result = 0;
    int len = height.size();

    for (int i = 0, j = len; i < j;) {
      int minHeight = height[i] < height[j] ? height[i++] : height[j--];
      result = max(result, (j - i + 1) * minHeight);
    }

    cout << "result max: " << result << endl;
    return result;
  }
};

int main()
{
  Solution SolutionFn;

  // 1,8,6,2,5,4,8,3,7
  vector<int> test;
  test.push_back(1);
  test.push_back(8);
  test.push_back(6);
  test.push_back(2);
  test.push_back(5);
  test.push_back(4);
  test.push_back(8);
  test.push_back(3);
  test.push_back(7);

  SolutionFn.maxArea(test);
  SolutionFn.maxArea1(test);
}
```

### container-with-most-water

```ts
function maxArea(height: number[]): number {
  let result = 0;
  const len = height.length;

  for (let i = 0, j = len - 1; i < j; ) {
    const minHeight = height[i] < height[j] ? height[i++] : height[j--];
    result = Math.max(result, (j - i + 1) * minHeight);
  }

  return result;
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
```

### move-zeroes

```cpp
#include <iostream>
#include <vector>
using namespace std;

void print(vector<int> &input)
{
    for (int i = 0; i < input.size(); i++)
    {
        cout << input.at(i) << ' ';
    }
}

class Solution
{
public:
    void moveZeroes(vector<int> &nums)
    {

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

        print(nums);
    }
};

int main()
{
    Solution SolutionFn;

    vector<int> test;
    test.push_back(0);
    test.push_back(1);
    test.push_back(0);
    test.push_back(3);
    test.push_back(12);

    SolutionFn.moveZeroes(test);
}

```

### move-zeroes

```ts
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

const nums = [0, 1, 0, 3, 12];
moveZeroes(nums);

console.log(nums);
```

### two-sum

```cpp
#include <iostream>
#include <vector>
using namespace std;

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

int main()
{
    Solution SolutionFn;

    // 2,7,11,15
    vector<int> test = { 2, 7, 11, 15 };

    vector<int> result = SolutionFn.twoSum(test, 9);

    cout << "result" << " " << result[0] << " " << result[1] << endl;
}

```
