class Queue {
    constructor() {
        this.items = {};
        this.frontIndex = 0;
        this.backIndex = 0;
    }
    enqueue(item) {
        this.items[this.backIndex] = item;
        this.backIndex++;
    }
    dequeue() {
        const item = this.items[this.frontIndex];
        delete this.items[this.frontIndex];
        this.frontIndex++;
        return item;
    }
    peek() {
        return this.items[this.frontIndex];
    }
    get printQueue() {
        return this.items;
    }
}

class Solution {
    /**
    * @param number n
    * @param number k
    * @param number[] arr
    
    * @returns number[]
    */

    printFirstNegativeInteger(n, k, arr) {
        // code here
        let queue = new Queue();
        let ans = [];
        
        for(let item of arr){
            if(k)
            queue.enqueue(item);
        }
    }
}