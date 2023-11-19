/**
 * @description Given two arrays a[] and b[] respectively of size n and m, the task is to print the count of elements in the intersection (or common elements) of the two arrays. For this question, the intersection of two arrays can be defined as the set containing distinct common elements between the two arrays. 
 * 
 * @link https://practice.geeksforgeeks.org/problems/intersection-of-two-arrays2404/1
 * 
 * @param {number[]} a
 * @param {number[]} b
 * @param {number} n
 * @param {number} m
 * @returns {number}
*/
class Solution {
    // Function to return the count of the number of elements in
    // the intersection of two arrays.
    NumberofElementsInIntersection(a, b, n, m) {
        // code here
        let ans = 0;
        let myset = new Set();
        let firstArrayGreater = false;
        if (n => m) {
            firstArrayGreater = true;
        }
        if (firstArrayGreater) {
            for (let item of b) {
                myset.add(item, item);
            }
            for (let item of a) {
                if (myset.has(item)) {
                    ans++;
                    myset.delete(item);
                }
            }
        }
        else {
            for (let item of a) {
                myset.add(item, item);
            }
            for (let item of b) {
                if (myset.has(item)) {
                    ans++;
                    myset.delete(item);
                }
            }
        }
        return ans;
    }
}