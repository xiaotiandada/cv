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