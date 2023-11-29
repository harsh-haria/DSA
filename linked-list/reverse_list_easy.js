/**
 * @description Given a linked list of N nodes. The task is to reverse this list.
 * 
 * @link https://practice.geeksforgeeks.org/problems/reverse-a-linked-list/1
 * 
 * @param {Node} head
 * @returns {Node}
*/

/*
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
*/

class Solution {
    //Function to reverse a linked list.
    reverseList(head) {
        if (!head.next) {
            return head;
        }
        if (!head.next.next) {
            let node1 = head;
            let node2 = head.next;

            node1.next = null;
            node2.next = node1;
            return node2;
        }
        let node1 = head;
        let node2 = head.next;
        let node3 = head.next.next;

        while (node3) {
            // node1.next = null;
            node2.next = node1;
            node1 = node2;
            node2 = node3;
            node3 = node3.next;
        }
        node2.next = node1;
        head.next = null;
        return node2;
    }

}