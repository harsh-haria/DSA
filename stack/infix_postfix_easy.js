/**
 * @description Given an infix expression in the form of string str. Convert this infix expression to postfix expression.
 * 
 * @link https://practice.geeksforgeeks.org/problems/infix-to-postfix-1587115620/1
 * 
 * @param {string} s
 * @returns {string}
*/

function deg(c) {
    if (c === '^') return 3;
    else if (c === '*' || c === '/') return 2;
    else if (c === '+' || c === '-') return 1;
    else return -1;
}

class Stack {
    constructor() {
        this.items = [];
    }
    push(element) {
        this.items.push(element);
    }
    pop() {
        if (this.empty()) {
            return null;
        }
        return this.items.pop();
    }
    top() {
        if (this.empty()) {
            return null;
        }
        return this.items[this.items.length - 1];
    }
    empty() {
        return this.items.length === 0;
    }
    size() {
        return this.items.length;
    }
    print() {
        console.log(this.items.join(" "));
    }
}

class Solution {
    infixToPostfix(s) {
        let ans = ``;
        let stack = new Stack();
        let stackringLength = s.length;
        let i = 0;
        while (i != stackringLength) {
            if (s[i] >= 'a' && s[i] <= 'z') {
                ans += s[i];
            }
            else if (s[i] === '(') {
                stack.push(s[i]);
            }
            else if (s[i] === ')') {
                while (stack.top() !== '(') {
                    ans += stack.top();
                    stack.pop();
                }
                stack.pop();
            }
            else {
                while (!stack.empty() && deg(s[i]) <= deg(stack.top())) {
                    if (s[i] === '^' && stack.top() !== '^') break;
                    else {
                        ans += stack.top();
                        stack.pop();
                    }
                }
                stack.push(s[i]);
            }
            i++;
        }
        while (stack.top()) {
            ans += stack.pop();
        }
        return ans;
    }
}