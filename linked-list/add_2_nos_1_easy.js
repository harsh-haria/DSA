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

class Solution {
    //Function to add two numbers represented by linked list.
    addTwoLists(first, second) {
        //your code here
        let string1 = ``;
        let string2 = ``;
        let finalNum = 0;

        while (first) {
            string1 += first.data;
            first = first.next;
        }
        while (second) {
            string2 += second.data;
            second = second.next;
        }

        finalNum = (+string1) + (+string2);
        finalNum = finalNum + '';
        console.log(finalNum);

        let newHead = new Node(-1);
        let navigator;

        for (let stringPos = 0; stringPos < finalNum.length; stringPos++) {
            if (newHead.data == -1) {
                newHead.data = +finalNum[stringPos];
                navigator = newHead;
                continue;
            }
            let element = new Node(+finalNum[stringPos]);
            navigator.next = element;
            navigator = navigator.next;
        }
        return newHead;
    }
}