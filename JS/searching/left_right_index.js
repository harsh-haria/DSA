/**
 * @description Given a sorted array with possibly duplicate elements. The task is to find indexes of first and last occurrences of an element X in the given array.
 * 
 * @example
 * - N = 9
 * - v[] = {1, 3, 5, 5, 5, 5, 67, 123, 125}
 * - X = 5
 * 
 * - Output: 2 5
 * 
 * @param {number[]} v
 * @param {number} x
 * @returns {number[]}
*/

let BinarySearch = function (arr, x, start, end) {
    if (start > end) return -1;
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === x) return mid;
    if (arr[mid] > x) return BinarySearch(arr, x, start, mid - 1);
    else return BinarySearch(arr, x, mid + 1, end);
}

class Solution {
    indexes(v, x) {
        // code here
        let arrayLength = v.length;
        let location = BinarySearch(v, x, 0, arrayLength - 1);
        // console.log(location);
        if (location === -1) {
            return [-1, -1];
        }
        let left = location;
        let right = location;
        while (left >= 1 && v[left - 1] === x) {
            left--;
        }
        while (right <= arrayLength && v[right + 1] === x) {
            right++
        }
        return [left, right];
    }
}
