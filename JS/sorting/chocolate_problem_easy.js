/**
 * 
 * @description 
 * - Given an array A[ ] of positive integers of size N, where each value represents the number of chocolates in a packet. Each packet can have a variable number of chocolates. There are M students, the task is to distribute chocolate packets among M students such that:
 * - 1. Each student gets exactly one packet.
 * - 2. The difference between maximum number of chocolates given to a student and minimum number of chocolates given to a student is minimum.
 * 
 * @link https://practice.geeksforgeeks.org/problems/chocolate-distribution-problem3825/1
 * 
 * @example
 * Input:
 * N = 8, M = 5
 * A = {3, 4, 1, 9, 56, 7, 9, 12}
 * Output: 6
 * Explanation: The minimum difference between maximum chocolates and minimum chocolates is 9 - 3 = 6 by choosing following M packets :{3, 4, 9, 7, 9}.
 * 
 * @param {number[]} arr
 * @param {number} n
 * @param {number} m
 * @returns {number}
*/

class Solution {
    findMinDiff(arr, n, m) {
        //code here
        arr = arr.sort(function (a, b) { return a - b });
        // console.log(arr);
        let i = 0;
        let min = 1000000000 + 7;
        while (i + m - 1 < n) {
            let mostCandies = i + m - 1;
            let left = arr[i];
            let right = arr[mostCandies];
            min = Math.min(min, right - left);
            // console.log(left, right, min);
            i++;
        }
        return min;
    }
}