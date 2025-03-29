/**
 * @link https://practice.geeksforgeeks.org/problems/longest-consecutive-1s-1587115620/1
 * 
 * @param {Number} N
 * @returns {Number}
*/
// Function to calculate the longest consecutive ones
class Solution {

    maxConsecutiveOnes(a) {
        // code here
        let answer1 = ``;
        while (a > 0) {
            if (a % 2 == 0) {
                // answer.push(0);
                answer1 += '0';
                a = a / 2;
            }
            else if (a % 2 == 1) {
                // answer.push(1);
                a = (a - 1) / 2;
                answer1 += '1';
            }
            if (a == 1) {
                // answer.push(1);
                answer1 += '1';
                break;
            }
        }
        let maxLength = 0;
        let tempLength = 0;
        let numBitLength = answer1.length;
        for (let bitPos = 0; bitPos < numBitLength; bitPos++) {
            if (answer1[bitPos] == 1) {
                tempLength++;
            }
            else {
                tempLength = 0;
            }
            maxLength = Math.max(maxLength, tempLength);
        }
        return maxLength;
    }
}

const solution = new Solution();
const ones = solution.maxConsecutiveOnes(14);
console.log(ones);
