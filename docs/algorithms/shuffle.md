Fisher–Yates shuffle

- https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
- https://leetcode.cn/problems/shuffle-an-array/
- https://github.com/labuladong/fucking-algorithm/blob/master/%E7%AE%97%E6%B3%95%E6%80%9D%E7%BB%B4%E7%B3%BB%E5%88%97/%E6%B4%97%E7%89%8C%E7%AE%97%E6%B3%95.md

`Math.floor(Math.random() * (i + 1));` 和 `Math.floor(Math.random() * i + 1);` 的区别在于括号的位置以及生成的随机数范围。

1. `Math.floor(Math.random() * (i + 1));`：这个表达式首先计算 `(i + 1)`，然后将 `Math.random()` 生成的随机小数乘以 `(i + 1)`，最后使用 `Math.floor()` 向下取整，确保结果是一个整数。这样生成的随机数范围是从 `0` 到 `i`（包括 `i`）。

2. `Math.floor(Math.random() * i + 1);`：这个表达式首先计算 `Math.random()` 生成的随机小数乘以 `i`，然后将结果加 `1`，最后使用 `Math.floor()` 向下取整，确保结果是一个整数。这样生成的随机数范围是从 `1` 到 `i+1`（包括 `i+1`）。

所以，两者的区别在于第一个表达式的随机数范围包括 `0` 到 `i`，而第二个表达式的随机数范围包括 `1` 到 `i+1`。通常情况下，如果你想生成一个范围从 `0` 到 `i` 的随机整数，应该使用第一个表达式。如果你想生成一个范围从 `1` 到 `i+1` 的随机整数，应该使用第二个表达式。

```js
function shuffle(arr) {
  const n = arr.length;
  for (let i = n - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    console.log('i', i, j);
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  return arr;
}

// Example usage
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const shuffled = shuffle(arr);
console.log(shuffled); // [5, 6, 3, 10, 9, 8, 2, 7, 1, 4]

// i j 9 3
// i j 8 7
// i j 7 4
// i j 6 0
// i j 5 2
// i j 4 3
// i j 3 1
// i j 2 0
// i j 1 0
// [
//   9, 6, 7, 2, 10,
//   3, 1, 5, 8,  4
// ]
```

```javascript | pure
const shuffle = (array) => {
  // 创建一个副本以不影响原始数组

  const shuffledArray = array.slice();

  // Fisher-Yates 洗牌算法

  let len = shuffledArray.length;

  for (let i = 0; i < len; i++) {
    // 生成一个随机索引，范围是 0 到 i

    let randomIndex = Math.floor(Math.random() * (i + 1));

    // 交换当前位置的元素和随机位置的元素

    [shuffledArray[i], shuffledArray[randomIndex]] = [shuffledArray[randomIndex], shuffledArray[i]];
  }

  return shuffledArray;
};

let array = [1, 2, 3, 4, 5];

console.log('shuffle', shuffle(array));
```

### lodash shuffle

- https://github.com/lodash/lodash/blob/master/shuffle.js

```js
function shuffle(array) {
  const length = array == null ? 0 : array.length;
  if (!length) {
    return [];
  }

  let index = -1;
  const lastIndex = length - 1;

  while (++index < length) {
    const rand = index + Math.floor(Math.random() * (lastIndex - index + 1));
    console.log('rand', rand, index);
    const value = array[rand];
    array[rand] = array[index];
    array[index] = value;
  }
  return array;
}

// Example usage
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const shuffled = shuffle(arr);
console.log(shuffled); // [5, 6, 3, 10, 9, 8, 2, 7, 1, 4]
```

```cpp
void shuffle(vector<int>& nums) {
  // random_device rd;
  for (int i = nums.size() - 1; i > 0; --i) {
    // int j = rd() % (i + 1);
    int j = rand() % (i + 1);
    cout << " j " << j << "\r";
    swap(nums[i], nums[j]);
  }
}

int main() {
    vector<int> nums = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
    shuffle(nums);
    for (int num : nums) {
        cout << num << " ";
    }
    cout << endl;
    return 0;
}

//  j 3
//  j 7
//  j 1
//  j 5
//  j 5
//  j 0
//  j 2
//  j 0
//  j 1
// 10 9 5 3 1 7 6 2 8 4
```
