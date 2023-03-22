---
title: leetcode
order: 1
---

###

```vscode

```

### 100.相同的树

```cpp
/*
 * @lc app=leetcode.cn id=100 lang=cpp
 *
 * [100] 相同的树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    bool isSameTree(TreeNode* p, TreeNode* q) {
        if (p == nullptr && q == nullptr) {
            return true;
        } else if (p == nullptr || q == nullptr) {
            return false;
        } else if (p->val != q->val) {
            return false;
        } else {
            return isSameTree(p->left, q->left) && isSameTree(p->right, q->right);
        }
    }
};
// @lc code=end


```

### 101.对称二叉树

```cpp
/*
 * @lc app=leetcode.cn id=101 lang=cpp
 *
 * [101] 对称二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    bool check(TreeNode *p, TreeNode *q) {
        if (!p && !q) {
            return true;
        }

        if (!p || !q) {
            return false;
        }

        return p->val == q->val && check(p->left, q->right) && check(p->right, q->left);
    }
    bool isSymmetric(TreeNode* root) {
        return check(root, root);
    }
};
// @lc code=end


```

### 1021. 删除最外层的括号

```cpp
class Solution {
public:
    string removeOuterParentheses(string s) {
        string res;
        stack<char> st;

        for (auto c : s) {
            if (c == ')') {
                st.pop();
            }

            if (!st.empty()) {
                res.push_back(c);
            }

            if (c == '(') {
                st.emplace(c);
            }
        }

        return res;
    }
};


// (()())(())
//
// (

// (
// ((

// ()
// (
// ...
// ()()
// (
// ()()(
// ...
```

### 104.二叉树的最大深度 2

```cpp
/*
 * @lc app=leetcode.cn id=104 lang=cpp
 *
 * [104] 二叉树的最大深度
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    int maxDepth(TreeNode* root) {
        if (root == nullptr) {
            return 0;
        }

        queue<TreeNode *> Q;
        Q.push(root);
        int ans = 0;
        while (!Q.empty()) {
            int sz = Q.size();
            while (sz > 0) {
                TreeNode* node = Q.front();
                Q.pop();

                if (node->left) {
                    Q.push(node->left);
                }
                if (node->right) {
                    Q.push(node->right);
                }
                sz -= 1;
            }
            ans += 1;
        }
        return ans;
    }
};
// @lc code=end


```

### 104.二叉树的最大深度

```cpp
/*
 * @lc app=leetcode.cn id=104 lang=cpp
 *
 * [104] 二叉树的最大深度
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    int maxDepth(TreeNode* root) {
        if (root == nullptr) {
            return 0;
        }
        return max(maxDepth(root->left), maxDepth(root->right)) + 1;
    }
};
// @lc code=end


```

### 1047. 删除字符串中的所有相邻重复项

```cpp
class Solution {
public:
    string removeDuplicates(string s) {
        string ret;
        for (char ch : s) {
            if (!ret.empty() && ret.back() == ch) {
                ret.pop_back();
            } else {
                ret.push_back(ch);
            }
        }
        return ret;
    }
};
```

### 111.二叉树的最小深度

```cpp
/*
 * @lc app=leetcode.cn id=111 lang=cpp
 *
 * [111] 二叉树的最小深度
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    int minDepth(TreeNode* root) {
        if (root == nullptr) {
            return 0;
        }

        if (root->left == nullptr && root->right == nullptr) {
            return 1;
        }

        int min_depth = INT_MAX;
        if (root->left != nullptr) {
            min_depth = min(minDepth(root->left), min_depth);
        }
        if (root->right != nullptr) {
            min_depth = min(minDepth(root->right), min_depth);
        }

        return min_depth + 1;
    }
};
// @lc code=end


```

### 112.路径总和

```cpp
/*
 * @lc app=leetcode.cn id=112 lang=cpp
 *
 * [112] 路径总和
 * 方法二：递归
 * DFS
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    bool hasPathSum(TreeNode* root, int targetSum) {
        if (root == nullptr) {
            return false;
        }
        if (root->left == nullptr && root->right == nullptr) {
            return targetSum == root->val;
        }
        return hasPathSum(root->left, targetSum - root->val) || hasPathSum(root->right, targetSum - root->val);
    }
};
// @lc code=end


```

### 1143.最长公共子序列

```cpp
/*
 * @lc app=leetcode.cn id=1143 lang=cpp
 *
 * [1143] 最长公共子序列
 * https://leetcode.cn/problems/longest-common-subsequence/solution/zui-chang-gong-gong-zi-xu-lie-by-leetcod-y7u0/
 */

// @lc code=start
class Solution {
public:
    int longestCommonSubsequence(string text1, string text2) {
        int m = text1.length();
        int n = text2.length();
        vector<vector<int>> dp(m + 1, vector<int>(n + 1));

        for (int i = 1; i <= m; i++) {
            char c1 = text1.at(i - 1);
            for (int j = 1; j <= n; j++) {
                char c2 = text2.at(j - 1);
                if (c1 == c2) {
                    dp[i][j] = dp[i - 1][j - 1] + 1;
                } else {
                    dp[i][j] = max(dp[i - 1][j], dp[i][j - 1]);
                }
            }
        }
        return dp[m][n];
    }
};
// @lc code=end


```

### 121.买卖股票的最佳时机 2

```cpp
/*
 * @lc app=leetcode.cn id=121 lang=cpp
 *
 * [121] 买卖股票的最佳时机
 * 方法二：一次遍历
 */

// maxProfit = 0
// minPrice = 1e9

// maxProfit = 0
// minPrice = 1

// maxProfit = 4
// minPrice = 1

// maxProfit = 5
// minPrice = 1

// @lc code=start
class Solution {
public:
    int maxProfit(vector<int>& prices) {
        int inf = 1e9;
        int minPrice = inf;
        int maxProfit = 0;
        for (int price : prices) {
            maxProfit = max(maxProfit, price - minPrice);
            minPrice = min(price, minPrice);
        }
        return maxProfit;
    }
};
// @lc code=end


```

### 121.买卖股票的最佳时机

```cpp
/*
 * @lc app=leetcode.cn id=121 lang=cpp
 *
 * [121] 买卖股票的最佳时机
 * 方法一：暴力法
 */

// @lc code=start
class Solution {
public:
    int maxProfit(vector<int>& prices) {
        int n = prices.size();
        int ans = 0;
        for (int i = 0; i < n; i++) {
            for (int j = i + 1; j < n; j++) {
                ans = max(ans, prices[j] - prices[i]);
            }
        }
        return ans;
    }
};
// @lc code=end


```

### 144.二叉树的前序遍历

```cpp
/*
 * @lc app=leetcode.cn id=144 lang=cpp
 *
 * [144] 二叉树的前序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:

    void preorder(TreeNode *root, vector<int> &res) {
        if (root == nullptr) {
            return;
        }

        res.push_back(root->val);
        preorder(root->left, res);
        preorder(root->right, res);
    }

    vector<int> preorderTraversal(TreeNode* root) {
        vector<int> res;
        preorder(root, res);
        return res;
    }
};
// @lc code=end


```

### 145.二叉树的后序遍历

```cpp
/*
 * @lc app=leetcode.cn id=145 lang=cpp
 *
 * [145] 二叉树的后序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    void postOrder(TreeNode *root, vector<int> &res) {
        if (root == nullptr) return;

        postOrder(root->left, res);
        postOrder(root->right, res);
        res.push_back(root->val);
    }
    vector<int> postorderTraversal(TreeNode* root) {
        vector<int> res;
        postOrder(root, res);
        return res;
    }
};
// @lc code=end


```

### 146.lru-缓存

```cpp
/*
 * @lc app=leetcode.cn id=146 lang=cpp
 *
 * [146] LRU 缓存
 */

// @lc code=start
struct DLinkedNode {
    int key, value;
    DLinkedNode *prev;
    DLinkedNode *next;
    DLinkedNode(): key(0), value(0), prev(nullptr), next(nullptr) {}
    DLinkedNode(int _key, int _value): key(_key), value(_value), prev(nullptr), next(nullptr) {}
};

class LRUCache {
private:
    unordered_map<int, DLinkedNode*> cache;
    DLinkedNode *head;
    DLinkedNode *tail;
    int size;
    int capacity;
public:
    LRUCache(int _capacity): capacity(_capacity), size(0) {
        // 使用伪头部和伪尾部节点
        head = new DLinkedNode();
        tail = new DLinkedNode();
        head->next = tail;
        tail->prev = head;
    }

    int get(int key) {
        if (!cache.count(key)) {
            return -1;
        }
        // 如果 key 存在，先通过哈希表定位，再移到头部
        DLinkedNode* node = cache[key];
        moveToHead(node);
        return node->value;
    }

    void put(int key, int value) {
        if (!cache.count(key)) {
           // 如果 key 不存在，创建一个新的节点
            DLinkedNode* node = new DLinkedNode(key, value);
            // 添加进哈希表
            cache[key] = node;
            // 添加至双向链表的头部
            addToHead(node);
            ++size;
            if (size > capacity) {
                // 如果超出容量，删除双向链表的尾部节点
                DLinkedNode* removed = removeTail();
                // 删除哈希表中对应的项
                cache.erase(removed->key);
                // 防止内存泄漏
                delete removed;
                --size;
            }
        } else {
            // 如果 key 存在，先通过哈希表定位，再修改 value，并移到头部
            DLinkedNode* node = cache[key];
            node->value = value;
            moveToHead(node);
        }
    }

    void addToHead(DLinkedNode *node) {
        node->prev = head;
        node->next = head->next;
        head->next->prev = node;
        head->next = node;
    }

    void removeNode(DLinkedNode *node) {
        node->prev->next = node->next;
        node->next->prev = node->prev;
    }

    void moveToHead(DLinkedNode *node) {
        removeNode(node);
        addToHead(node);
    }

    DLinkedNode *removeTail() {
        DLinkedNode *node = tail->prev;
        removeNode(node);
        return node;
    }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * LRUCache* obj = new LRUCache(capacity);
 * int param_1 = obj->get(key);
 * obj->put(key,value);
 */
// @lc code=end


```

### 1475.商品折扣后的最终价格 2

```cpp
/*
 * @lc app=leetcode.cn id=1475 lang=cpp
 *
 * [1475] 商品折扣后的最终价格
 * 单调栈
 */

// @lc code=start
class Solution {
public:
    vector<int> finalPrices(vector<int>& prices) {
        int n = prices.size();
        vector<int> ans(n);
        stack<int> st;

        for (int i = n - 1; i >= 0; i--) {
            while (!st.empty() && st.top() > prices[i]) {
                st.pop();
            }

            ans[i] = st.empty() ? prices[i] : prices[i] - st.top();
            st.emplace(prices[i]);
        }

        return ans;
    }
};
// @lc code=end
```

### 1475.商品折扣后的最终价格

```cpp
/*
 * @lc app=leetcode.cn id=1475 lang=cpp
 *
 * [1475] 商品折扣后的最终价格
 * 暴力解法
 */

// @lc code=start
class Solution {
public:
    vector<int> finalPrices(vector<int>& prices) {
        int n = prices.size();
        vector<int> ans;

        for (int i = 0; i < n; i++) {
            int discount = 0;
            for (int j = i + 1; j < n; j++) {
                if (prices[j] <= prices[i]) {
                    discount = prices[j];
                    break;
                }
            }

            ans.emplace_back(prices[i] - discount);
        }

        return ans;
    }
};
// @lc code=end


```

### 1544. 整理字符串

```cpp
class Solution {
public:
    string makeGood(string s) {
        string ret;
        for (char ch : s) {
            // 字符 ch 与字符串 ret 的最后一个字符互为同一个字母的大小写, 弹出 ret 的最后一个字符
            if (!ret.empty() && tolower(ret.back()) == tolower(ch) && ret.back() != ch) {
                ret.pop_back();
            } else {
                ret.push_back(ch);
            }
        }
        return ret;
    }
};
```

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

### 1598.文件夹操作日志搜集器

```cpp
/*
 * @lc app=leetcode.cn id=1598 lang=cpp
 *
 * [1598] 文件夹操作日志搜集器
 */

// @lc code=start
class Solution {
public:
    int minOperations(vector<string>& logs) {
        int depth = 0;
        for (auto& log : logs) {
            if (log == "./") {
                continue;
            } else if (log == "../") {
                // 如果已经在主文件夹下，则 继续停留在当前文件夹 。
                if (depth > 0) {
                    depth--;
                }
            } else {
                depth++;
            }
        }
        return depth;
    }
};
// @lc code=end


```

### 1614.括号的最大嵌套深度

```cpp
/*
 * @lc app=leetcode.cn id=1614 lang=cpp
 *
 * [1614] 括号的最大嵌套深度
 */

// @lc code=start
class Solution {
public:
    int maxDepth(string s) {
        int ans = 0;
        int size = 0;
        for (char ch : s) {
            if (ch == '(') {
                ++size;
                ans = max(ans, size);
            } else if (ch == ')') {
                --size;
            }
        }
        return ans;
    }
};
// @lc code=end


```

### 17.电话号码的字母组合

```cpp
/*
 * @lc app=leetcode.cn id=17 lang=cpp
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
class Solution {
public:
    vector<string> letterCombinations(string digits) {
        vector<string> combinations;
        if (digits.empty()) {
            return combinations;
        }

        unordered_map<char, string> phoneMap{
            {'2', "abc"},
            {'3', "def"},
            {'4', "ghi"},
            {'5', "jkl"},
            {'6', "mno"},
            {'7', "pqrs"},
            {'8', "tuv"},
            {'9', "wxyz"}
        };

        string combination;
        backtrack(combinations, phoneMap, digits, 0, combination);
        return combinations;
    }

    void backtrack(
        vector<string>& combinations,
        const unordered_map<char, string>& phoneMap,
        const string& digits,
        int index,
        string& combination) {
            if (index == digits.length()) {
                combinations.push_back(combination);
            } else {
                char digit = digits[index];
                const string& letters = phoneMap.at(digit);
                for (const char& letter : letters) {
                    combination.push_back(letter);
                    backtrack(combinations, phoneMap, digits, index + 1, combination);
                    combination.pop_back();
                }
            }
        }
};
// @lc code=end


```

### 1700.无法吃午餐的学生数量

```cpp
/*
 * @lc app=leetcode.cn id=1700 lang=cpp
 *
 * [1700] 无法吃午餐的学生数量
 */

// @lc code=start
// tudents = [1,1,1,0,0,1], sandwiches = [1,0,0,0,1,1]
// 4 2
// 3 2
// 3 1
// 3 0
// 3 0
// return
class Solution {
public:
    int countStudents(vector<int>& students, vector<int>& sandwiches) {
        int s1 = accumulate(students.begin(), students.end(), 0);
        int s0 = students.size() - s1;

        for (int i = 0; i < sandwiches.size(); i++) {
            if (sandwiches[i] == 0 && s0 > 0) {
                s0--;
            } else if (sandwiches[i] == 1 && s1 > 0) {
                s1--;
            } else {
                break;
            }
        }
        return s0 + s1;
    }
};
// @lc code=end


```

### 191.位-1-的个数 2

```cpp
/*
 * @lc app=leetcode.cn id=191 lang=cpp
 *
 * [191] 位1的个数
 * 方法二：位运算优化
 */

// @lc code=start
class Solution {
public:
    int hammingWeight(uint32_t n) {
        int ret = 0;
        while (n) {
            n &= n - 1;
            ret++;
        }
        return ret;
    }
};
// @lc code=end


```

### 191.位-1-的个数

```cpp
/*
 * @lc app=leetcode.cn id=191 lang=cpp
 *
 * [191] 位1的个数
 * 方法一：循环检查二进制位
 */

// @lc code=start
class Solution {
public:
    int hammingWeight(uint32_t n) {
        int ret = 0;
        for (int i = 0; i < 32; i++) {
            if (n & (1 << i)) {
                ret++;
            }
        }
        return ret;
    }
};
// @lc code=end


```

### 198.打家劫舍 2

```cpp
/*
 * @lc app=leetcode.cn id=198 lang=cpp
 *
 * [198] 打家劫舍
 * https://leetcode.cn/problems/house-robber/solution/da-jia-jie-she-by-leetcode-solution/
 * 动态规划 + 滚动数组
 */

// @lc code=start
class Solution {
public:
    int rob(vector<int>& nums) {
        if (nums.empty()) {
            return 0;
        }

        int size = nums.size();
        if (size == 1) {
            return nums[0];
        }

        int first = nums[0];
        int second = max(nums[0], nums[1]);

        for (int i = 2; i < size; i++) {
            int temp = second;
            second = max(first + nums[i], second);
            first = temp;
        }
        return second;
    }
};
// @lc code=end


```

### 198.打家劫舍

```cpp
/*
 * @lc app=leetcode.cn id=198 lang=cpp
 *
 * [198] 打家劫舍
 * https://leetcode.cn/problems/house-robber/solution/da-jia-jie-she-by-leetcode-solution/
 * 动态规划
 */

// @lc code=start
class Solution {
public:
    int rob(vector<int>& nums) {
        if (nums.empty()) {
            return 0;
        }

        int size = nums.size();
        if (size == 1) {
            return nums[0];
        }

        vector<int> dp = vector<int>(size, 0);
        dp[0] = nums[0];
        dp[1] = max(nums[0], nums[1]);

        for (int i = 2; i < size; i++) {
            dp[i] = max(dp[i - 2] + nums[i], dp[i - 1]);
        }
        return dp[size - 1];
    }
};
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

### 208.实现-trie-前缀树

```cpp
/*
 * @lc app=leetcode.cn id=208 lang=cpp
 *
 * [208] 实现 Trie (前缀树)
 */

// @lc code=start
class Trie {
private:
    vector<Trie*> children;
    bool isEnd;

    Trie* searchPrefix(string prefix) {
        Trie* node = this;
        for (char ch: prefix) {
            ch -= 'a';
            if (node->children[ch] == nullptr) {
                return nullptr;
            }
            node = node->children[ch];
        }
        return node;
    }
public:
    Trie(): children(26), isEnd(false) {

    }

    void insert(string word) {
        Trie* node =this;
        for (char ch: word) {
            ch -= 'a';
            if (node->children[ch] == nullptr) {
                node->children[ch] = new Trie();
            }
            node = node->children[ch];
        }
        node->isEnd = true;
    }

    bool search(string word) {
        Trie* node = this->searchPrefix(word);
        return node != nullptr && node->isEnd;
    }

    bool startsWith(string prefix) {
        return this->searchPrefix(prefix) != nullptr;
    }
};

/**
 * Your Trie object will be instantiated and called as such:
 * Trie* obj = new Trie();
 * obj->insert(word);
 * bool param_2 = obj->search(word);
 * bool param_3 = obj->startsWith(prefix);
 */
// @lc code=end


```

### 22.括号生成

```cpp
/*
 * @lc app=leetcode.cn id=22 lang=cpp
 *
 * [22] 括号生成
 * 方法一：暴力法
 */

// @lc code=start
class Solution {
public:

    bool valid(const string &str) {
        int balance = 0;

        for (char c: str) {
            if (c == '(')  {
                ++balance;
            } else {
                --balance;
            }

            if (balance < 0) {
                return false;
            }
        }

        return balance == 0;
    }

    void generate_all(string &current, int n, vector<string> &result) {
        if (n == current.size()) {
            if (valid(current)) {
                result.push_back(current);
            }
            return;
        }

        current += '(';
        generate_all(current, n, result);
        current.pop_back();
        current += ')';
        generate_all(current, n, result);
        current.pop_back();
    }

    vector<string> generateParenthesis(int n) {
        vector<string> result;
        string current;

        generate_all(current, n * 2, result);

        return result;
    }
};
// @lc code=end


```

### 225.用队列实现栈

```cpp
/*
 * @lc app=leetcode.cn id=225 lang=cpp
 *
 * [225] 用队列实现栈
 */

// @lc code=start
class MyStack {
public:
    queue<int> queue1;
    queue<int> queue2;
    MyStack() {

    }

    void push(int x) {
        // 入栈操作时，首先将元素入队到 queue2
        queue2.push(x);
        while (!queue1.empty()) {
            // 然后将 queue1 的全部元素依次出队并入队到 queue2
            queue2.push(queue1.front());
            queue1.pop();
        }
        // 此时 queue2 的前端的元素即为新入栈的元素，再将 queue 1 和 queue2 互换，
        // 则 queue 1​ 的元素即为栈内的元素，queue1 的前端和后端分别对应栈顶和栈底。
        swap(queue1, queue2);
    }

    int pop() {
        int r = queue1.front();
        queue1.pop();
        return r;
    }

    int top() {
        return queue1.front();
    }

    bool empty() {
        return queue1.empty();
    }
};

/**
 * Your MyStack object will be instantiated and called as such:
 * MyStack* obj = new MyStack();
 * obj->push(x);
 * int param_2 = obj->pop();
 * int param_3 = obj->top();
 * bool param_4 = obj->empty();
 */
// @lc code=end


```

### 226.翻转二叉树

```cpp
/*
 * @lc app=leetcode.cn id=226 lang=cpp
 *
 * [226] 翻转二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    TreeNode* invertTree(TreeNode* root) {

        if (root == nullptr) {
            return nullptr;
        }

        TreeNode* left = invertTree(root->left);
        TreeNode* right = invertTree(root->right);

        root->left = right;
        root->right = left;

        return root;
    }
};
// @lc code=end


```

### 232.用栈实现队列

```cpp
/*
 * @lc app=leetcode.cn id=232 lang=cpp
 *
 * [232] 用栈实现队列
 */

// @lc code=start
class MyQueue {
public:
    stack<int> inStack, outStack;

    // 每次 pop 或 peek 时，若输出栈为空则将输入栈的全部数据依次弹出并压入输出栈，
    // 这样输出栈从栈顶往栈底的顺序就是队列从队首往队尾的顺序。
    void in2out() {
        while (!inStack.empty()) {
            outStack.push(inStack.top());
            inStack.pop();
        }
    }

    MyQueue() {

    }

    void push(int x) {
        inStack.push(x);
    }

    int pop() {
        if (outStack.empty()) {
            in2out();
        }
        int x = outStack.top();
        outStack.pop();
        return x;
    }

    int peek() {
        if (outStack.empty()) {
            in2out();
        }
        return outStack.top();
    }

    bool empty() {
        return inStack.empty() && outStack.empty();
    }
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * MyQueue* obj = new MyQueue();
 * obj->push(x);
 * int param_2 = obj->pop();
 * int param_3 = obj->peek();
 * bool param_4 = obj->empty();
 */
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

### 242.有效的字母异位词

```cpp
/*
 * @lc app=leetcode.cn id=242 lang=cpp
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
class Solution {
public:
    bool isAnagram(string s, string t) {
        if (s.length() != t.length()) {
            return false;
        }

        sort(s.begin(), s.end());
        sort(t.begin(), t.end());
        return s == t;
    }
};
// @lc code=end


/*
 * @lc app=leetcode.cn id=242 lang=cpp
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
class Solution {
public:
    bool isAnagram(string s, string t) {
        if (s.length() != t.length()) {
            return false;
        }

        vector<int> table(26, 0);
        for (auto& ch: s) {
            table[ch - 'a']++;
        }
        for (auto& ch: t ) {
            table[ch - 'a']--;
            if (table[ch - 'a'] < 0) {
                return false;
            }
        }

        return true;
    }
};
// @lc code=end


```

### 322.零钱兑换

```cpp
/*
 * @lc app=leetcode.cn id=322 lang=cpp
 *
 * [322] 零钱兑换
 */

// @lc code=start
class Solution {
public:
    int coinChange(vector<int>& coins, int amount) {
        int Max = amount + 1;
        vector<int> dp(amount + 1, Max);
        dp[0] = 0;
        for (int i = 1; i <= amount; ++i) {
            for (int j = 0; j < (int)coins.size(); ++j) {
                if (coins[j] <= i) {
                    dp[i] = min(dp[i], dp[i - coins[j]] + 1);
                }
            }
        }
        return dp[amount] > amount ? -1 : dp[amount];
    }
};
// @lc code=end


```

### 367.有效的完全平方数

```cpp
/*
 * @lc app=leetcode.cn id=367 lang=cpp
 *
 * [367] 有效的完全平方数
 */

// 16
// left = 0
// right = 16
// mid = 8
// square = 64
// right = 7

// left = 0
// right = 7
// mid = 3 int
// square = 9
// right = 7
// left = 4

// left = 4
// right = 7
// mid = 5
// square = 25
// right = 6

// left = 4
// right = 6
// mid = 4
// square = 16
// true

// @lc code=start
class Solution {
public:
    bool isPerfectSquare(int num) {
        int left = 0;
        int right = num;
        while (left <= right) {
            int mid = left + (right - left) / 2;
            long square = (long) mid * mid;
            if (square < num) {
                left = mid + 1;
            } else if (square > num) {
                right = mid - 1;
            } else {
                return true;
            }
        }
        return false;
    }
};
// @lc code=end


```

### 387.字符串中的第一个唯一字符

```cpp
/*
 * @lc app=leetcode.cn id=387 lang=cpp
 *
 * [387] 字符串中的第一个唯一字符
 */

// @lc code=start
class Solution {
public:
    int firstUniqChar(string s) {
        unordered_map<int, int> frequency;
        for (char ch: s) {
            ++frequency[ch];
        }

        for (int i = 0; i < s.size(); ++i) {
            if (frequency[s[i]] == 1) {
                return i;
            }
        }

        return -1;
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

### 45.跳跃游戏-ii

```cpp
/*
 * @lc app=leetcode.cn id=45 lang=cpp
 *
 * [45] 跳跃游戏 II
 * https://leetcode.cn/problems/jump-game-ii/solution/45-by-ikaruga/
 */

// [2,3,1,1,4]
// i = 0
// maxPos = 3
// end = 3
// ans = 1

// i = 1
// maxPos = 4
// end = 3
// ans = 1

// i = 2
// mmaxPos = 4
// end = 3
// ans = 1

// i = 3
// maxPos = 4
// end = 4
// ans = 2

// i = 4
// maxPos = 8
// end = 4
// ans = 2

// @lc code=start
class Solution {
public:
    int jump(vector<int>& nums) {
        int ans = 0;
        int end = 0;
        int maxPos = 0;
        for (int i = 0; i < nums.size() - 1; i++) {
            maxPos = max(maxPos, i + nums[i]);
            if (i == end) {
                end = maxPos;
                ans++;
            }
        }
        return ans;
    }
};
// @lc code=end


```

### 455.分发饼干

```cpp
/*
 * @lc app=leetcode.cn id=455 lang=cpp
 *
 * [455] 分发饼干
 */

// @lc code=start
class Solution {
public:
    int findContentChildren(vector<int>& g, vector<int>& s) {
        sort(g.begin(), g.end());
        sort(s.begin(), s.end());
        int m = g.size();
        int n = s.size();
        int count = 0;

        for (int i = 0, j = 0; i < m && j < n; i++, j++) {
            while (j < n && g[i] > s[j]) {
                j++;
            }
            if (j < n) {
                count++;
            }
        }
        return count;
    }
};
// @lc code=end


```

### 496.下一个更大元素-i 2

```cpp
/*
 * @lc app=leetcode.cn id=496 lang=cpp
 *
 * [496] 下一个更大元素 I
 * 单调栈 + 哈希表
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


```

### 496.下一个更大元素-i

```cpp
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


```

### 50.pow-x-n 2

```cpp
/*
 * @lc app=leetcode.cn id=50 lang=cpp
 *
 * [50] Pow(x, n)
 *
 */

// @lc code=start
class Solution {
public:
    double quickMul(double x, long long N) {
        if (N == 0) {
            return 1.0;
        }

        double y = quickMul(x, N / 2);
        return N % 2 == 0 ? y * y : y * y * x;

    }

    double myPow(double x, int n) {
        long long N = n;
        return N >= 0 ? quickMul(x, N) : 1.0 / quickMul(x, -N);
    }
};
// @lc code=end


```

### 50.pow-x-n

```cpp
/*
 * @lc app=leetcode.cn id=50 lang=cpp
 *
 * [50] Pow(x, n)
 * 暴力
 */

// @lc code=start
class Solution {
public:
    double myPow(double x, int n) {

        if (n < 0) {
            return 1.0 / myPow(x, -n);
        }

        double result = 1;
        for (int i = 0; i < n; i++) {
            result *= x;
        }
        return result;
    }
};
// @lc code=end
```

### 509.斐波那契数 2

```cpp
/*
 * @lc app=leetcode.cn id=509 lang=cpp
 *
 * [509] 斐波那契数
 * https://en.wikipedia.org/wiki/Dynamic_programming
 */

// @lc code=start
class Solution {
public:
    map<int, int> m = {
        {0, 0},
        {1, 1}
    };
    int fib(int n) {
        if (m.count(n) == 0) {
            m[n] = fib(n - 1) + fib(n - 2);
        }
        return m[n];
    }
};
// @lc code=end


// var m := map(0 → 0, 1 → 1)
// function fib(n)
//     if key n is not in map m
//         m[n] := fib(n − 1) + fib(n − 2)
//     return m[n]
```

### 509.斐波那契数 3

```cpp
/*
 * @lc app=leetcode.cn id=509 lang=cpp
 *
 * [509] 斐波那契数
 * https://leetcode.cn/problems/fibonacci-number/solution/fei-bo-na-qi-shu-by-leetcode-solution-o4ze/
 * 方法一：动态规划
 */

// 1，1，2，3，5，8，13，21，34，55
// 1 1

// 4
// i = 2
// p = 0
// q = 1
// r = p + q = 1

// i = 3
// p = 1
// q = 1
// r = 2

// i = 4
// p = 1
// q = 2
// r = 3

// i = 5
// p = 2
// q = 3
// r = 5

// i = 6
// p = 3
// q = 5
// r = 8

// @lc code=start
class Solution {
public:
    int fib(int n) {
        if (n < 2) {
            return n;
        }

        int p = 0;
        int q = 0;
        int r = 1;

        for (int i = 2; i <= n; ++i) {
            p = q;
            q = r;
            r = p + q;
        }
        return r;
    }
};
// @lc code=end
```

### 509.斐波那契数 4

```cpp
/*
 * @lc app=leetcode.cn id=509 lang=cpp
 *
 * [509] 斐波那契数
 * https://en.wikipedia.org/wiki/Dynamic_programming
 */

// 1，1，2，3，5，8，13，21，34，55
// 1 1

// 4
// i = 2
// p = 0
// q = 1
// r = p + q = 1

// i = 3
// p = 1
// q = 1
// r = 2

// i = 4
// p = 1
// q = 2
// r = 3

// i = 5
// p = 2
// q = 3
// r = 5

// i = 6
// p = 3
// q = 5
// r = 8

// @lc code=start
class Solution {
public:
    int fib(int n) {
        if (n < 2) {
            return n;
        } else {
            int previousFib = 0;
            int currentFib = 1;
            for (int i = 0; i < n - 1; ++i) {
                int newFib = previousFib + currentFib;
                previousFib = currentFib;
                currentFib = newFib;
            }
            return currentFib;
        }
    }
};
// @lc code=end


// function fib(n)
//     if n = 0
//         return 0
//     else
//         var previousFib := 0, currentFib := 1
//         repeat n − 1 times // loop is skipped if n = 1
//             var newFib := previousFib + currentFib
//             previousFib := currentFib
//             currentFib  := newFib
//         return currentFib
```

### 509.斐波那契数

```cpp
/*
 * @lc app=leetcode.cn id=509 lang=cpp
 *
 * [509] 斐波那契数
 */

// @lc code=start
class Solution {
public:
    int fib(int n) {
        if (n <= 1) {
            return n;
        }

        return fib(n - 1) + fib(n - 2);
    }
};
// @lc code=end


```

### 51.n-皇后

```cpp
/*
 * @lc app=leetcode.cn id=51 lang=cpp
 *
 * [51] N 皇后
 */

// @lc code=start
class Solution {
public:
    vector<vector<string>> solveNQueens(int n) {
        auto solutions = vector<vector<string>>();
        auto queens = vector<int>(n, -1);
        auto columns = unordered_set<int>();
        auto diagonals1 = unordered_set<int>();
        auto diagonals2 = unordered_set<int>();
        backtrack(solution, columns, diagonals1, diagonals2);
        return solutions;
    }

    void backtrack(
        vector<vector<string>> &solutions,
        vector<int> &queens,
        int n,
        int row,
        unordered_set<int> &columns,
        unordered_set<int> &diagonals1,
        unordered_set<int> &diagonals2,
    ) {
        for (int i = 0; i < n; n++) {
            // ...
            //    https://leetcode.cn/problems/n-queens/solution/nhuang-hou-by-leetcode-solution/
        }
    }

    vector<string> generatedBoard(vector<vector<int> &queens, int n) {
        auto board = vector<string>();
        for (int i = 0; i < n; i++) {
            string row = string(n, '.');
            row[queens[i]] = 'Q';
            board.push_back(row);
        }
        return board;
    }
};
// @lc code=end


```

### 53.最大子数组和

```cpp
/*
 * @lc app=leetcode.cn id=53 lang=cpp
 *
 * [53] 最大子数组和
 * https://leetcode.cn/problems/maximum-subarray/solution/zui-da-zi-xu-he-by-leetcode-solution/#comment
 *
 */

// [-2,1,-3,4,-1,2,1,-5,4]
// pre = 0, -2, 1, -2, 4, 3, 5, 6, 1, 5
// maxAns = -2, -2, 1, 1, 4, 4, 5, 6, 6, 6

// @lc code=start
class Solution {
public:
    int maxSubArray(vector<int>& nums) {
        int pre = 0;
        int maxAns = nums[0];

        for (const auto &x: nums) {
            pre = max(pre + x, x);
            // printf("%d ", pre);
            maxAns = max(maxAns, pre);
            // printf("%d ", maxAns);
        }
        return maxAns;
    }
};
// @lc code=end


```

### 55.跳跃游戏 2

```cpp
/*
 * @lc app=leetcode.cn id=55 lang=cpp
 *
 * [55] 跳跃游戏
 * https://leetcode.cn/problems/jump-game/solution/tiao-yue-you-xi-by-leetcode-solution/
 * 方法一：贪心
 */

// [2,3,1,1,4]
// [3,2,1,0,4]

// @lc code=start
class Solution {
public:
    bool canJump(vector<int>& nums) {
        int n = nums.size();
        // 依次遍历数组中的每一个位置，并实时维护 最远可以到达的位置
        int rightmost = 0;
        for (int i = 0; i < n; ++i) {
            if (i <= rightmost) {
                rightmost = max(rightmost, i + nums[i]);
                // 如果 最远可以到达的位置 大于等于数组中的最后一个位置，那就说明最后一个位置可达，我们就可以直接返回 True 作为答案
                if (rightmost >= n - 1) {
                    return true;
                }
            }
        }
        // 反之，如果在遍历结束后，最后一个位置仍然不可达，我们就返回 False 作为答案。
        return false;
    }
};
// @lc code=end


```

### 55.跳跃游戏

```cpp
/*
 * @lc app=leetcode.cn id=55 lang=cpp
 *
 * [55] 跳跃游戏
 * https://leetcode.cn/problems/jump-game/solution/55-by-ikaruga/
 */

// [2,3,1,1,4]
// [3,2,1,0,4]

// @lc code=start
class Solution {
public:
    bool canJump(vector<int>& nums) {
        int k = 0;
        for (int i = 0; i < nums.size(); i++) {
            if (i > k) {
                return false;
            }
            k = max(k, i + nums[i]);
        }
        return true;
    }
};
// @lc code=end


```

### 589.n-叉树的前序遍历

```cpp
/*
 * @lc app=leetcode.cn id=589 lang=cpp
 *
 * [589] N 叉树的前序遍历
 */

// @lc code=start
/*
// Definition for a Node.
class Node {
public:
    int val;
    vector<Node*> children;

    Node() {}

    Node(int _val) {
        val = _val;
    }

    Node(int _val, vector<Node*> _children) {
        val = _val;
        children = _children;
    }
};
*/

class Solution {
public:

    void helper(const Node* root, vector<int> &res) {
        if (root == nullptr) return;

        res.emplace_back(root->val);
        for (auto &ch: root->children) {
            helper(ch, res);
        }
    }

    vector<int> preorder(Node* root) {
        vector<int> res;
        helper(root, res);
        return res;
    }
};
// @lc code=end


```

### 62.不同路径

```cpp
/*
 * @lc app=leetcode.cn id=62 lang=cpp
 *
 * [62] 不同路径
 * https://leetcode.cn/problems/unique-paths/solution/bu-tong-lu-jing-by-leetcode-solution-hzjf/
 */

// @lc code=start
class Solution {
public:
    int uniquePaths(int m, int n) {
        vector<vector<int>> f(m, vector<int>(n));

        for (int i = 0; i < m; ++i) {
            f[i][0] = 1;
        }

        for (int j = 0; j < n; ++j) {
            f[0][j] = 1;
        }

        for (int i = 1; i < m; ++i) {
            for (int j = 1; j < n; ++j) {
                f[i][j] = f[i - 1][j] + f[i][j - 1];
            }
        }
        return f[m - 1][n - 1];
    }
};
// @lc code=end


```

### 69.x-的平方根

```cpp
/*
 * @lc app=leetcode.cn id=69 lang=cpp
 *
 * [69] x 的平方根
 * 方法二：二分查找
 */

// @lc code=start
class Solution {
public:
    int mySqrt(int x) {
        int l = 0;
        int r = x;
        int ans = -1;

        while (l <= r) {
            int mid = l + (r - l) / 2;
            if ((long long)mid * mid <= x) {
                ans = mid;
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }
        return ans;
    }


};
// @lc code=end


```

### 70.爬楼梯

```cpp
/*
 * @lc app=leetcode.cn id=70 lang=cpp
 *
 * [70] 爬楼梯
 */

// @lc code=start
class Solution {
public:
    int climbStairs(int n) {

        // 0 0 1
        // 0 1 1
        // 1 2 3
        // 2 5 8

        if (n <= 3) {
            return n;
        }

        int p = 1, q = 2, r = 3;

        for (int i = 4; i <= n; i++) {
            p = q;
            q = r;
            r = p + q;
        }
        return r;
    }
};
// @lc code=end


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

### 78.子集

```cpp
/*
 * @lc app=leetcode.cn id=78 lang=cpp
 *
 * [78] 子集
 */

// @lc code=start
class Solution {
public:
    vector<int> t;
    vector<vector<int>> ans;

    void dfs(int cur, vector<int> &nums) {
        if (cur == nums.size()) {
            ans.push_back(t);
            return;
        }
        t.push_back(nums[cur]);
        dfs(cur + 1, nums);
        t.pop_back();
        dfs(cur + 1, nums);
    }

    vector<vector<int>> subsets(vector<int>& nums) {
        dfs(0, nums);
        return ans;
    }
};
// @lc code=end


```

### 860.柠檬水找零

```cpp
/*
 * @lc app=leetcode.cn id=860 lang=cpp
 *
 * [860] 柠檬水找零
 */

// @lc code=start
class Solution {
public:
    bool lemonadeChange(vector<int>& bills) {
        int five = 0;
        int ten = 0;

        for (auto& bill : bills) {
            if (bill == 5) {
                five++;
            } else if (bill == 10) {
                if (five == 0) {
                    return false;
                }
                five--;
                ten++;
            } else {
                if (five > 0 && ten > 0) {
                    five--;
                    ten--;
                } else if (five >= 3) {
                    five -=3;
                } else {
                    return false;
                }
            }
        }
        return true;
    }
};
// @lc code=end


```

### 912.排序数组 2

```cpp
/*
 * @lc app=leetcode.cn id=912 lang=cpp
 *
 * [912] 排序数组
 * selectionSort
 * 选择排序
 */

// @lc code=start
class Solution {
public:
    vector<int> sortArray(vector<int>& nums) {
        int n = nums.size();
        for (int i = 0; i < n; i++) {
            int minIndex = i;
            for (int j = i + 1; j < n; j++) {
                if (nums[j] < nums[minIndex]) {
                    minIndex = j;
                }
            }

            int temp = nums[i];
            nums[i] = nums[minIndex];
            nums[minIndex] = temp;
        }

        return nums;
    }
};
// @lc code=end

```

### 912.排序数组 3

```cpp
/*
 * @lc app=leetcode.cn id=912 lang=cpp
 *
 * [912] 排序数组
 * insertionSort
 * 插入排序
 * [5,2,3,1]
 *
 */

// @lc code=start
class Solution {
public:
    vector<int> sortArray(vector<int>& nums) {
        int n = nums.size();
        for (int i = 1; i < n; i++) {
            int key = nums[i];
            int j = i - 1;
            while ( j >= 0 && nums[j] > key) {
                nums[j + 1] = nums[j];
                j--;
            }
            nums[j + 1] = key;
        }

        return nums;
    }
};
// @lc code=end


```

### 912.排序数组 4

```cpp
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


```

### 912.排序数组 5

```cpp
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


```

### 912.排序数组 6

```cpp
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


```

### 912.排序数组 7

```cpp
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
```

### 912.排序数组

```cpp
/*
 * @lc app=leetcode.cn id=912 lang=cpp
 *
 * [912] 排序数组
 * bubbleSort
 * 冒泡排序
 */

// @lc code=start
class Solution {
public:
    vector<int> sortArray(vector<int>& nums) {
        int n = nums.size();
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n - i -1; j++) {
                if (nums[j] > nums[j + 1]) {
                    int temp = nums[j];
                    nums[j] = nums[j + 1];
                    nums[j + 1] = temp;
                }
            }
        }

        return nums;
    }
};
// @lc code=end


```

### 94.二叉树的中序遍历

```cpp
/*
 * @lc app=leetcode.cn id=94 lang=cpp
 *
 * [94] 二叉树的中序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:

    void inorder(TreeNode *root, vector<int> &res) {
        if (root == nullptr) {
            return;
        }

        inorder(root->left, res);
        res.push_back(root->val);
        inorder(root->right, res);
    }

    vector<int> inorderTraversal(TreeNode* root) {
        vector <int> res;
        inorder(root, res);
        return res;
    }
};
// @lc code=end


```

### 98.验证二叉搜索树

```cpp
/*
 * @lc app=leetcode.cn id=98 lang=cpp
 *
 * [98] 验证二叉搜索树
 * 方法一: 递归
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    bool helper(TreeNode *root, long long lower, long long upper) {
        if (root == nullptr) {
            return true;
        }

        if (root->val <= lower || root->val >= upper) {
            return false;
        }

        return helper(root->left, lower, root->val) && helper(root->right, root->val, upper);
    }

    bool isValidBST(TreeNode* root) {
        return helper(root, LONG_MIN, LONG_MAX);
    }
};
// @lc code=end


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

### 剑指 Offer 09. 用两个栈实现队列

```cpp
class CQueue {
    stack<int> inStack, outStack;

private:
    void in2out() {
        while (!inStack.empty()) {
            outStack.push(inStack.top());
            inStack.pop();
        }
    }

public:
    CQueue() {

    }

    void appendTail(int value) {
        inStack.push(value);
    }

    int deleteHead() {
        if (outStack.empty()) {
            if (inStack.empty()) {
                return -1;
            }
            in2out();
        }

        int value = outStack.top();
        outStack.pop();
        return value;
    }
};

/**
 * Your CQueue object will be instantiated and called as such:
 * CQueue* obj = new CQueue();
 * obj->appendTail(value);
 * int param_2 = obj->deleteHead();
 */
```

### 剑指 Offer 30. 包含 min 函数的栈

```cpp
class MinStack {
    stack<int> x_stack;
    stack<int> min_stack;
public:
    /** initialize your data structure here. */
    MinStack() {
        min_stack.push(INT_MAX);
    }

    void push(int x) {
        x_stack.push(x);
        min_stack.push(::min(min_stack.top(), x));
    }

    void pop() {
        x_stack.pop();
        min_stack.pop();
    }

    int top() {
        return x_stack.top();
    }

    int min() {
        return min_stack.top();
    }
};

/**
 * Your MinStack object will be instantiated and called as such:
 * MinStack* obj = new MinStack();
 * obj->push(x);
 * obj->pop();
 * int param_3 = obj->top();
 * int param_4 = obj->min();
 */
```

### 面试题 03.02. 栈的最小值

```cpp
class MinStack {
    stack<int> x_stack;
    stack<int> min_stack;
public:
    /** initialize your data structure here. */
    MinStack() {
        min_stack.push(INT_MAX);
    }

    void push(int x) {
        x_stack.push(x);
        min_stack.push(min(min_stack.top(), x));
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
 * obj->push(x);
 * obj->pop();
 * int param_3 = obj->top();
 * int param_4 = obj->getMin();
 */
```
