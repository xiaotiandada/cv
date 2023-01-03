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