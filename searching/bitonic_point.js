/**
 * 
 * @description Given an array arr of n elements that is first strictly increasing and then maybe strictly decreasing, find the maximum element in the array.
Note: If the array is increasing then just print the last element will be the maximum value.
 * 
 * @example
 * Input:
 * - n = 9
 * - arr[] = {1,15,25,45,42,21,17,12,11}
 * - Output: 45
 * - Explanation: Maximum element is 45.
 * 
 * @param {number[]} arr
 * @param {number} N
 * @returns {number}
*/

const BinarySearchHighest = (start, end, array) => {
    while (start < end) {
        const middle = Math.floor((start + end) / 2);

        if (array[middle] < array[middle + 1]) {
            // We are in the increasing part, so move the left pointer to mid + 1
            start = middle + 1;
        } else {
            // We are in the decreasing part, so move the right pointer to mid
            end = middle;
        }
    }
    return array[start];
}

class Solution {

    findMaximum(arr, n) {
        //your code here
        let solution = BinarySearchHighest(0, n - 1, arr);
        return solution;
    }
}