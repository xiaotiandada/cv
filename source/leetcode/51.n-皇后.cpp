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

