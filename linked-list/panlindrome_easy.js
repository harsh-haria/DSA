/**
 * @description Given a singly linked list of size N of integers. The task is to check if the given linked list is palindrome or not.
 * 
 * @link https://practice.geeksforgeeks.org/problems/check-if-linked-list-is-pallindrome/1
 * 
 * @param {Node} head
 * @returns {boolean}
*/

/*
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
*/

function reverseList(head) {
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

class Solution {
    //Function to check whether the list is palindrome.
    isPalindrome(head) {
        //your code here
        let length = 0;
        let lengthFinder = head;
        while (lengthFinder) {
            length++;
            lengthFinder = lengthFinder.next;
        }
        // console.log(length);
        let reverseOldHead = head;
        // while()
        let middle = Math.ceil(length / 2) - 1;
        let middleCheck = middle + 1;
        while (middle) {
            reverseOldHead = reverseOldHead.next;
            middle--;
        }
        // console.log(reverseOldHead.data);
        let reverse = reverseList(reverseOldHead);
        while (middleCheck) {
            // console.log(head.data, reverse.data);
            if (head.data !== reverse.data) {
                return false;
            }
            head = head.next;
            reverse = reverse.next;
            middleCheck--;
        }
        return true;
    }

}