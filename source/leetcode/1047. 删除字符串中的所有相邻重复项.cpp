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