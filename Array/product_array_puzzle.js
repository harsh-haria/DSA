/**
 * @description Given an array nums[] of size n, construct a Product Array P (of same size n) such that P[i] is equal to the product of all the elements of nums except nums[i].
 * 
 * @example
 * - n = 5, nums[] = {10, 3, 5, 6, 2}
 * - output: 180 600 360 300 900
 * - Explanation:
        For i=0, P[i] = 3*5*6*2 = 180.
        For i=1, P[i] = 10*5*6*2 = 600.
        For i=2, P[i] = 10*3*6*2 = 360.
        For i=3, P[i] = 10*3*5*2 = 300.
        For i=4, P[i] = 10*3*5*6 = 900.
 * 
 * @param {number[]} arr
 * @param {number} n
 * @return {number[]}
 */

class Solution {
    productExceptSelf(nums, n) {
        //code here
        let total = 1;
        let returnArray = [];
        let zeroCount = 0;
        let zeroFlag = false;
        for (let item of nums) {
            if (item === 0) {
                zeroFlag = true;
                zeroCount++;
                continue;
            }
            total *= item;
        }
        for (let item of nums) {
            if (item == 0) {
                if (zeroCount > 1) {
                    returnArray.push(0);
                    continue;
                }
                returnArray.push(total);
            }
            else if (zeroFlag) {
                returnArray.push(0);
            }
            else {
                let newItem = total / item;
                returnArray.push(newItem);
            }
        }
        return returnArray;
    }
}