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