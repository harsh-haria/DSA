/*
    Given an array of size N-1 such that it only contains distinct integers in the range of 1 to N. 
    Find the missing element.
*/

class Solution {
    missingNumber(array, n) {
        //code here
        let totalSum = 0, arraySum = 0;
        for (let i = 1; i <= n; i++) {
            totalSum += i;
        }
        for (let item in array) {
            arraySum += array[item];
        }
        let finalReturn = (totalSum - arraySum)
        return finalReturn;
    }
}

//call missingNumber function with array and n as parameters
let array = [1, 2, 3, 5];
let n = 5;
let obj = new Solution();
console.log(obj.missingNumber(array, n));