/**
 * @description Given an array A containing 2*N+2 positive numbers, out of which 2*N numbers exist in pairs whereas the other two number occur exactly once and are distinct. Find the other two numbers. Return in increasing order.
 * 
 * @link https://practice.geeksforgeeks.org/problems/finding-the-numbers0215/1
 * 
 * @param {number[]} nums
 * @return {number[]} 
*/

class Solution {
    singleNumber(nums) {
        //code here
        let xor = 0;
        for (let item of nums) {
            xor ^= item;
        }
        let rightMost1Bit = 0;
        let tempXor = xor;
        while (tempXor > 0) {
            let oneBit = tempXor & 1;
            if (oneBit == 1) {
                break;
            }
            else {
                rightMost1Bit++;
                tempXor = tempXor >> 1;
            }
        }
        let firstDistinctElement = 0;
        for (let item of nums) {
            if ((item & (1 << rightMost1Bit)) != 0) {
                firstDistinctElement ^= item;
            }
        }
        let number1 = firstDistinctElement;
        let number2 = xor ^ firstDistinctElement;
        return [Math.min(number1, number2), Math.max(number1, number2)];
    }
}