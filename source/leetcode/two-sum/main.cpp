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
