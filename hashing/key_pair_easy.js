/**
 * 
 * @description Given an array Arr of N positive integers and another number X. Determine whether or not there exist two elements in Arr whose sum is exactly X.
 * 
 * @link https://practice.geeksforgeeks.org/problems/key-pair5616/1
 * 
 * @param {number[]} arr
 * @param {number} n
 * @param {number} x
 * @return {boolean}
 */

class Solution {
    hasArrayTwoCandidates(arr, n, x) {
        //code here
        let elementMap = new Map();
        // for (let item of arr) {
        //     elementMap.set(item, item);
        // }
        for (let item of arr) {
            let fetchInt = x - item;
            // if(item == fetchInt) continue;
            if (elementMap.has(fetchInt)) {
                return true;
            }
            elementMap.set(item, item);
        }
        return false;
    }
}