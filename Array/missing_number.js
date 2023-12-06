//User function Template for javascript

/**
 * 
 * @description Given an array of size N-1 such that it only contains distinct integers in the range of 1 to N. Find the missing element.
 * 
 * @link https://practice.geeksforgeeks.org/problems/missing-number-in-array1416/1
 * 
 * @param {number[]} array
 * @param {number} n
 * @returns {number}
*/

class Solution {
    missingNumber(array, n) {
        //code here
        let total = 0;
        for (let i = 1; i <= n; i++) {
            total += i;
        }
        let subTotal = 0;
        for (let item of array) {
            subTotal += item;
        }
        return total - subTotal;
    }
}