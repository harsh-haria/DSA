/**
 * @description You are given an array A of integers of length N. You need to calculate factorial of each number. The answer can be very large, so print it modulo 109 + 7.
 * 
 * @param {number[]} a
 * @param {number} n
 * @returns {number}
 */

class Solution {
    factorial(a, n) {
        //code here
        let factorialArray = [1, 1, 2];
        let maxElement = Math.max(...a);
        for (let index = 3; index <= maxElement; index++) {
            let newNumber = 0;
            newNumber = (factorialArray[index - 1] * index) % 1000000007;
            factorialArray.push(newNumber);
        }
        let output = [];
        for (let num of a) {
            output.push(factorialArray[num]);
        }
        return output;
    }
}