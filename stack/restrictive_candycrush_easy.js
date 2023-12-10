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
            return null;
        }
        return this.items.pop();
    }

    // Peek at the top element without removing it
    peek() {
        if (this.isEmpty()) {
            return null;
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
        let newArray = this.items;
        let maped = newArray.map(item => item.char);
        return (maped.join(""));
    }
}

class Solution {
    Reduced_String(k, s) {
        //code here
        let stack = new Stack();
        for (let ch of s) {
            if (stack.isEmpty()) {
                stack.push({ char: ch, sameCount: 1 });
            }
            else {
                let topElement = stack.peek();
                if (topElement['char'] == ch) {
                    stack.push({ char: ch, sameCount: topElement['sameCount'] + 1 });
                }
                else {
                    stack.push({ char: ch, sameCount: 1 });
                }
            }
            let seqCheckPoint = stack.peek();
            if (seqCheckPoint['sameCount'] === k) {
                for (let ele = 0; ele < k; ele++) {
                    stack.pop();
                }
            }
        }
        return stack.print();
    }
}