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
    lengther(){
        let size = Object.keys(this.items).length;
        return size;l
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
        let idx = 0;

        let i=0, j=0;
        while(j<n){
            if(arr[j]<0){
                queue.enqueue(arr[j]);
            }
            if(j-i+1 == k){
                if(queue.lengther() === 0){
                    ans[idx++] = 0;
                }
                else{
                    ans[idx++] = queue.peek();
                    if(arr[i] === queue.peek()){
                        queue.dequeue();
                    }
                }
                i++;
            }
            j++;
        }
        return ans;
    }
}

const solution = new Solution();
let n = 5;
let k = 2;
let array = [-8,2,3,-6,10];
let answer = solution.printFirstNegativeInteger(n,k,array);
console.log(answer);