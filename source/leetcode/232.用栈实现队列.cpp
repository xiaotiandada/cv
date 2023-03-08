/*
 * @lc app=leetcode.cn id=232 lang=cpp
 *
 * [232] 用栈实现队列
 */

// @lc code=start
class MyQueue {
public:
    stack<int> inStack, outStack;

    // 每次 pop 或 peek 时，若输出栈为空则将输入栈的全部数据依次弹出并压入输出栈，
    // 这样输出栈从栈顶往栈底的顺序就是队列从队首往队尾的顺序。
    void in2out() {
        while (!inStack.empty()) {
            outStack.push(inStack.top());
            inStack.pop();
        }
    }

    MyQueue() {

    }
    
    void push(int x) {
        inStack.push(x);
    }
    
    int pop() {
        if (outStack.empty()) {
            in2out();
        }
        int x = outStack.top();
        outStack.pop();
        return x;
    }
    
    int peek() {
        if (outStack.empty()) {
            in2out();
        }
        return outStack.top();
    }
    
    bool empty() {
        return inStack.empty() && outStack.empty();
    }
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * MyQueue* obj = new MyQueue();
 * obj->push(x);
 * int param_2 = obj->pop();
 * int param_3 = obj->peek();
 * bool param_4 = obj->empty();
 */
// @lc code=end

