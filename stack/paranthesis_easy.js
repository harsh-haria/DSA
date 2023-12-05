/**
 * @description Given an expression string x. Examine whether the pairs and the orders of {,},(,),[,] are correct in exp. 
 * For example, the function should return 'true' for exp = [()]{}{[()()]()} and 'false' for exp = [(]). 
 * Note: The drive code prints "balanced" if function return true, otherwise it prints "not balanced".
 * 
 * @link https://practice.geeksforgeeks.org/problems/parenthesis-checker2744/1
 * 
 * @param {string} x
 * @returns {boolean}
*/

class Stack {
    constructor() {
        this.items = [];
    }

    // Push an element onto the stack
    push(element) {
        this.items.push(element);
    }

    // Pop the top element from the stack
    pop() {
        if (this.isEmpty()) {
            return "Underflow";
        }
        return this.items.pop();
    }

    // Peek at the top element without removing it
    peek() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        return this.items[this.items.length - 1];
    }

    // Check if the stack is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Get the size of the stack
    size() {
        return this.items.length;
    }

    // Print the stack elements
    print() {
        console.log(this.items.join(" "));
    }
}

class Solution {
    //Function to check if brackets are balanced or not.
    ispar(x) {
        //your code here
        let stack = new Stack();
        for (let item of x) {
            if (item == ')' || item == '}' || item == ']') {
                if (stack.isEmpty()) return false;
                if (item == ')') {
                    let top = stack.peek();
                    if (top == '(') {
                        stack.pop();
                        continue;
                    }
                    else {
                        return false;
                    }
                }
                if (item == '}') {
                    let top = stack.peek();
                    if (top == '{') {
                        stack.pop();
                        continue;
                    }
                    else {
                        return false;
                    }
                }
                if (item == ']') {
                    let top = stack.peek();
                    if (top == '[') {
                        stack.pop();
                        continue;
                    }
                    else {
                        return false;
                    }
                }
            }
            else {
                stack.push(item);
            }
        }
        if (!stack.isEmpty()) return false;
        return true;
    }
}