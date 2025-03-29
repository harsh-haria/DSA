
/**
 * @description Given two sorted linked lists consisting of N and M nodes respectively. The task is to merge both of the list (in-place) and return head of the merged list.
 * 
 * @link https://practice.geeksforgeeks.org/problems/merge-two-sorted-linked-lists/1
 * 
 * @param {Node} head1
 * @param {Node} head2
 * @returns {Node}
*/

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Solution {
    //Function to merge two sorted linked list.
    sortedMerge(head1, head2) {
        // console.log(head1.data);
        let newHead = new Node(-1);
        let navigator = new Node(-1);

        if (head1['data'] <= head2['data']) {
            newHead = head1;
            navigator = head1;
            head1 = head1.next;
            newHead.next = null;

        }
        else {
            newHead = head2;
            navigator = head2;
            head2 = head2.next;
            newHead.next = null;
        }

        while (head1 && head2) {
            // console.log(head1, head2);
            if (head1.data <= head2.data) {
                let temp = head1;
                head1 = head1.next;
                navigator.next = temp;
                temp.next = null;
            }
            else {
                let temp = head2;
                head2 = head2.next;
                navigator.next = temp;
                temp.next = null;
            }
            navigator = navigator.next;
        }
        if (head1) {
            navigator.next = head1;
        }
        if (head2) {
            navigator.next = head2;
        }
        return newHead;
    }
}

const solution = new Solution();
let head1 = new Node(5);
let head2 = new Node(8);

lef1 = new Node(6);
rig1 = new Node(9);
head1.next = lef1;
head2.nextt = rig1;
let response = solution.sortedMerge(head1, head2);
console.log(response);