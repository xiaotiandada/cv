/*
 * @lc app=leetcode.cn id=23 lang=cpp
 *
 * [23] 合并 K 个升序链表
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
    ListNode* mergeKLists(vector<ListNode*>& lists) {
      vector<int> nodes;
      for (auto l : lists) {
        while (l) {
          nodes.emplace_back(l->val);
          l = l->next;
        }
      }

      sort(nodes.begin(), nodes.end());
      ListNode* dummy = new ListNode(-1);
      ListNode* p = dummy;

      for (auto val : nodes) {
        p->next = new ListNode(val);
        p = p->next;
      }

      return dummy->next;
    }
};
// @lc code=end

