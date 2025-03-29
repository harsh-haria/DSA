/*
    For an integer N find the number of trailing zeroes in N!.
*/

class Solution {
    trailingZeroes(N) {
        //code here
        let res = 0;
        for (let i = 5; i <= N; i = i * 5) {
            res += parseInt(N / i);
        }
        return res;
    }
}

//call trailingZeroes function with N as parameter
let N = 1000000000; //78 => 18
let obj = new Solution();
console.log(obj.trailingZeroes(N));