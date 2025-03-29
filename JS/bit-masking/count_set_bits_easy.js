/**
 * @description Given a positive integer N, print count of set bits in it. 
 * 
 * @link https://practice.geeksforgeeks.org/problems/set-bits0143/1
 * 
 * @param {number} n
 * @returns {number}
*/

class Solution {
    setBits(N) {
        //your code here
        let answer = 0;
        while (N > 0) {
            if (N % 2 == 0) {
                // answer.push(0);
                N = N / 2;
            }
            else if (N % 2 == 1) {
                // answer.push(1);
                N = (N - 1) / 2;
                answer += 1;
            }
            if (N == 1) {
                // answer.push(1);
                answer += 1;
                break;
            }
        }
        return answer;
    }
}