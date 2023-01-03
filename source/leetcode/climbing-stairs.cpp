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
