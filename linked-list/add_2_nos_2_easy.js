/**
 * @description Given two decimal numbers represented by two linked lists of size N and M respectively. The task is to return a linked list that represents the sum of these two numbers.
 * For example, the number 190 will be represented by the linked list, 1->9->0->null, similarly 25 by 2->5->null. Sum of these two numbers is 190 + 25 = 215, which will be represented by 2->1->5->null. You are required to return the head of the linked list 2->1->5->null.
 * 
 * @link https://practice.geeksforgeeks.org/problems/add-two-numbers-represented-by-linked-lists/1
 * 
 * @param {Node} first
 * @param {Node} second
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
    //Function to add two numbers represented by linked list.
    addTwoLists(first, second) {
        //your code here
        let reversedFirst = reverseList(first);
        let reversedSecond = reverseList(second);

        let newHead = new Node(-1);
        let navigator = newHead;

        let carry = 0;

        while (reversedFirst && reversedSecond) {
            let data1 = reversedFirst.data;
            let data2 = reversedSecond.data;

            let addition = data1 + data2;
            if (carry) {
                addition += carry;
            }
            if (addition >= 10) {
                carry = 1;
                addition = addition - 10;
            }
            else {
                carry = 0;
            }

            let newNode = new Node(addition);
            if (newHead.data == -1) {
                newHead = newNode;
                navigator = newHead;
            }
            else {
                navigator.next = newNode;
                navigator = navigator.next;
            }
            reversedFirst = reversedFirst.next;
            reversedSecond = reversedSecond.next;
        }
        // console.log(newHead);
        while (reversedFirst) {
            let data1 = reversedFirst.data;
            let addition = data1;
            if (carry) {
                addition += carry;
            }
            if (addition >= 10) {
                carry = 1;
                addition = addition - 10;
            }
            else {
                carry = 0;
            }
            let newNode = new Node(addition);
            if (newHead.data == -1) {
                newHead = newNode;
                navigator = newHead;
            }
            else {
                navigator.next = newNode;
                navigator = navigator.next;
            }
            reversedFirst = reversedFirst.next;
        }
        while (reversedSecond) {
            let data2 = reversedSecond.data;
            let addition = data2;
            if (carry) {
                addition += carry;
            }
            if (addition >= 10) {
                carry = 1;
                addition = addition - 10;
            }
            else {
                carry = 0;
            }
            let newNode = new Node(addition);
            navigator.next = newNode;
            navigator = navigator.next;
            reversedSecond = reversedSecond.next;
        }
        if (carry) {
            let newNode = new Node(carry);
            navigator.next = newNode;
        }
        return reverseList(newHead);
    }
}