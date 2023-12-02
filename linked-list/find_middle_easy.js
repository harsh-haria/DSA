/**
 * @description Given a singly linked list of N nodes. The task is to find the middle of the linked list. For example, if the linked list is. 1-> 2->3->4->5, then the middle node of the list is 3. If there are two middle nodes(in case, when N is even), print the second middle element. For example, if the linked list given is 1->2->3->4->5->6, then the middle node of the list is 4.
 * 
 * @link https://practice.geeksforgeeks.org/problems/finding-middle-element-in-a-linked-list/1
 * 
 * @param {Node} node
 * @return {number}
*/


/*
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

let head;
This is method only submission.
You only need to complete the below method.
*/

class Solution {
    /* Should return data of middle node. If linked list is empty, then  -1*/
    getMiddle(node) {
        //your code here
        let temp = node;
        let counter = 0;
        while (node) {
            node = node.next;
            counter++;
        }
        let middle;
        if (counter % 2 == 0) {
            middle = counter / 2 + 1;
        }
        else {
            middle = Math.ceil(counter / 2);
        }
        // console.log(middle);
        // let middle = Math.ceil(counter/2);
        middle -= 1;
        while (middle--) {
            temp = temp.next;
        }
        return temp.data;
    }
}