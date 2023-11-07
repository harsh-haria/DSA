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

function BinarySearch(start, end, array, num) {
    if (start > end) {
        return -1;
    }
    let middle = start + (end - start) / 2;
    if (array[middle] === num) {
        //position found
        return middle;
    }
    else if (array[middle] > num) {
        return BinarySearch(start, (middle - 1), array, num);
    }
    else if (array[middle] < num) {
        return BinarySearch((middle + 1), end, array, num);
    }
}

class Solution {
    indexes(v, x) {
        // code here
        let arrayLength = v.length;
        let location = BinarySearch(0, arrayLength - 1, v, x);
        if (location === -1) {
            reutrn[-1, -1];
        }
        let left = location;
        let right = location;
        while (v[left] === x) {
            left--;
        }
        while (v[right] === x) {
            right++
        }
        return [left + 1, right - 1];
    }
}
