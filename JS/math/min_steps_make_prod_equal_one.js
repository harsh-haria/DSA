/*
    Given an array arr[] containing N integers. 
    In one step, any element of the array can either be increased or decreased by one. 
    Find minimum steps required such that the product of the array elements becomes 1.
*/

class Solution {
    makeProductOne(arr, n) {
        //code here
        let zeroCount = 0, step = 0, mul = 1;
        for (let item in arr) {
            if (arr[item] < 0) {
                step += (-1 - arr[item]);
                mul *= -1;
            }
            else if (arr[item] == 0) {
                step += 1;
                zeroCount++;
            }
            else {
                step += (arr[item] - 1);
                mul *= 1;
            }
        }
        if (mul == 1 || zeroCount > 0) {
            return step;
        }
        else {
            return step + 2;
        }
    }
}

//call makeProductOne function with array and n as parameters
let array = [1, 1, 1]; // => 0, // [-2, 4, 0] => 5.
let n = 4;
let obj = new Solution();
console.log(obj.makeProductOne(array, n));