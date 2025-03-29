/**
 * @description Given a sorted array arr[] of distinct integers. Sort the array into a wave-like array(In Place). In other words, arrange the elements into a sequence such that arr[1] >= arr[2] <= arr[3] >= arr[4] <= arr[5].....  If there are multiple solutions, find the lexicographically smallest one.
 * 
 * @link https://practice.geeksforgeeks.org/problems/wave-array-1587115621/1
 */

class Solution {
    // arr: input array
    // n: size of array
    //Function to sort the array into a wave-like array.
    convertToWave(n, arr) {
        //your code here
        let left = 0;
        let right = left + 1;
        console.error(arr);
        while (right <= n - 1) {
            let temporaryStore = arr[left];
            arr[left] = arr[right];
            arr[right] = temporaryStore;

            left += 2;
            right += 2;
        }
        return arr
    }
}

let n = 5;
let inputArray = [1, 2, 3, 4, 5];
let solution = new Solution();
let output = solution.convertToWave(n, inputArray);
console.log(output);