/*
 * @lc app=leetcode.cn id=225 lang=cpp
 *
 * [225] 用队列实现栈
 */

// @lc code=start
class MyStack {
public:
    queue<int> queue1;
    queue<int> queue2;
    MyStack() {

    }
    
    void push(int x) {
        // 入栈操作时，首先将元素入队到 queue2
        queue2.push(x);
        while (!queue1.empty()) {
            // 然后将 queue1 的全部元素依次出队并入队到 queue2
            queue2.push(queue1.front());
            queue1.pop();
        }
        // 此时 queue2 的前端的元素即为新入栈的元素，再将 queue 1 和 queue2 互换，
        // 则 queue 1​ 的元素即为栈内的元素，queue1 的前端和后端分别对应栈顶和栈底。
        swap(queue1, queue2);
    }
    
    int pop() {
        int r = queue1.front();
        queue1.pop();
        return r;
    }
    
    int top() {
        return queue1.front();
    }
    
    bool empty() {
        return queue1.empty();
    }
};

/**
 * Your MyStack object will be instantiated and called as such:
 * MyStack* obj = new MyStack();
 * obj->push(x);
 * int param_2 = obj->pop();
 * int param_3 = obj->top();
 * bool param_4 = obj->empty();
 */
// @lc code=end

