
/**
 * @description You are given a pointer/ reference to the node which is to be deleted from the linked list of N nodes. The task is to delete the node. Pointer/ reference to head node is not given.
 * Note: No head reference is given to you. It is guaranteed that the node to be deleted is not a tail node in the linked list.
 * 
 * @link https://practice.geeksforgeeks.org/problems/delete-without-head-pointer/1
 * 
 * @param {Node} del
*/

/*
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

let head;
*/

//Function to delete a node without any reference to head pointer.
class Solution {
    deleteNode(del) {
        //your code here
        del.data = del.next.data;
        if (del.next.next) {
            del.next = del.next.next;
        }
        else {
            del.next = null;
        }
    }
}