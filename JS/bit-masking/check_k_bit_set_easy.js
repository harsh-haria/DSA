/**
 * @description Given a number N and a bit number K, check if Kth index bit of N is set or not. A bit is called set if it is 1. Position of set bit '1' should be indexed starting with 0 from LSB side in binary representation of the number. Note: Index is starting from 0. You just need to return true or false, driver code will take care of printing "Yes" and "No".
 * 
 * @link https://practice.geeksforgeeks.org/problems/check-whether-k-th-bit-is-set-or-not-1587115620/1
 * 
 * @param {Number} n
 * @param {Number} k
 * @returns {boolean}
*/

class Solution {
    checkKthBit(n, k) {
        //code here
        let newElement = 1 << (k);
        if ((n & newElement) != 0) return true;
        return false;
    }
}

const solution = new Solution();
let response = solution.checkKthBit(5, 1);
console.log(response);