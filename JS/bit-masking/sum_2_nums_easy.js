/**
 * @param {number} a
 * @param {number} b
 * @returns {number}
*/

class Solution {

    sum(a, b) {
        //your code here
        let answer1 = ``, answer2 = ``;
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
        while (b > 0) {
            if (b % 2 == 0) {
                // answer.push(0);
                answer2 += '0';
                b = b / 2;
            }
            else if (b % 2 == 1) {
                // answer.push(1);
                b = (b - 1) / 2;
                answer2 += '1';
            }
            if (b == 1) {
                // answer.push(1);
                answer2 += '1';
                break;
            }
        }
        let length1 = answer1.length;
        let length2 = answer2.length;
        if (length1 !== length2) {
            if (length1 < length2) {
                let zeros = length2 - length1;
                for (let i = 0; i < zeros; i++) {
                    answer1 += '0';
                }
            }
            else {
                let zeros = length1 - length2;
                for (let i = 0; i < zeros; i++) {
                    answer2 += '0';
                }
            }
        }
        // console.log(answer1, answer2); // 0011
        let newLength = answer1.length;
        let carry = 0;
        let finalAnswer = ``;
        for (let i = 0; i < newLength; i++) {
            let num1 = +answer1[i];
            let num2 = +answer2[i];
            if (carry) {
                if (num1 == 1 && num2 == 1) {
                    finalAnswer += '1';
                    carry = 1;
                }
                else if ((num1 == 1 && num2 == 0) || (num1 == 0 && num2 == 1)) {
                    finalAnswer += '0';
                    carry = 1;
                }
                else {
                    finalAnswer += '1';
                    carry = 0;
                }
            }
            else {
                if (num1 == 0 && num2 == 0) {
                    finalAnswer += '0';
                    carry = 0;
                }
                else if ((num1 == 1 && num2 == 0) || (num1 == 0 && num2 == 1)) {
                    finalAnswer += '1';
                    carry = 0;
                }
                else if (num1 == 1 && num2 == 1) {
                    finalAnswer += '0';
                    carry = 1;
                }
            }
        }
        if (carry) {
            finalAnswer += '1';
        }
        // console.log(finalAnswer);
        let finalNum = 0;
        for (let pos = 0; pos < finalAnswer.length; pos++) {
            let num = +finalAnswer[pos];
            finalNum += (num * Math.pow(2, pos));
        }
        return finalNum;
    }
}

const solution = new Solution();
let num = solution.sum(5, 6);
console.log(num);