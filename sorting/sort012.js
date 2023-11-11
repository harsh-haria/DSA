/**
 * @description Given an array of size N containing only 0s, 1s, and 2s; sort the array in ascending order.
 * 
 * @link https://practice.geeksforgeeks.org/problems/sort-an-array-of-0s-1s-and-2s4231/1
 * 
 * @example
 * Input:
 * - N = 5
 * - arr[]= {0 2 1 2 0}
 * 
 * Output:
 * - 0 0 1 2 2
 * 
 * Explanation:
 * - 0s 1s and 2s are segregated into ascending order.
 * 
 * @param {number[]} arr
 * @param {number} N
 * @returns {number[]}
*/

class Solution {
    sort012(arr, N) {
        //your code here
        let low = 0;
        let mid = 0;
        let high = N - 1;
        while (mid <= high) {
            if (arr[mid] == 0) {
                let temp = arr[low];
                arr[low] = arr[mid];
                arr[mid] = temp;
                low++;
                mid++;
            }
            else if (arr[mid] == 2) {
                let temp = arr[high];
                arr[high] = arr[mid];
                arr[mid] = temp;
                high--;
            }
            else {
                mid++;
            }
        }
        return arr;
    }
}