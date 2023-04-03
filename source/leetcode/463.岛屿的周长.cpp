/*
 * @lc app=leetcode.cn id=463 lang=cpp
 *
 * [463] 岛屿的周长
 */

// @lc code=start
class Solution {
    // 右下左上
    // x
    // constexpr static int dx[4] = {0, 1, 0, -1};
    // y
    // constexpr static int dy[4] = {1, 0, -1, 0};

    // 上右下左
    constexpr static int dx[4] = {-1, 0, 1, 0};
    constexpr static int dy[4] = {0, 1, 0, -1};
public:
    int islandPerimeter(vector<vector<int>>& grid) {
        int n = grid.size(), m = grid[0].size();
        int ans = 0;
        for (int i = 0; i < n; ++i) {
            for (int j = 0; j < m; ++j) {
                // 1 陆地
                if (grid[i][j]) {
                    int cnt = 0;
                    // 四条边
                    for (int k = 0; k < 4; ++k) {
                        // i = 0
                        // j = 1

                        // 右
                        // tx = 0 + 0
                        // ty = 1 + 1

                        // 下
                        // tx = 0 + 1
                        // ty = 1 + 0

                        // 左
                        // tx = 0 + 0
                        // ty = 1 + -1

                        // 上
                        // tx = 0 + -1
                        // ty = 1 + 0

                        int tx = i + dx[k];
                        int ty = j + dy[k];
                        // 仅当这条边为网格的边界或者相邻的另一个格子为水域

                        // 遍历网格时，判断当前位置 (x,y) 的相邻位置 (tx,ty) 是否越界或者是否为海洋的语句，其中：
                        // tx < 0 表示相邻位置的行坐标小于 0，即越界了；
                        // tx >= n 表示相邻位置的行坐标大于或等于网格的行数 n，即越界了；
                        // ty < 0 表示相邻位置的列坐标小于 0，即越界了；
                        // ty >= m 表示相邻位置的列坐标大于或等于网格的列数 m，即越界了；
                        // \!grid[tx][ty] 表示相邻位置 (tx, ty) 是海洋，即没有岛屿。
                        if (tx < 0 || tx >= n || ty < 0 || ty >= m || !grid[tx][ty]) {
                            cnt += 1;
                        }
                    }
                    ans += cnt;
                }
            }
        }
        return ans;
    }
};
// @lc code=end

