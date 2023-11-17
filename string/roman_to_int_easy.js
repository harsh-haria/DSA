/**
 * @link https://practice.geeksforgeeks.org/problems/roman-number-to-integer3201/1
 * 
 * @param {string} str
 * @returns {number}
 */

class Solution {
    romanToDecimal(str) {
        //code here
        let number = 0;
        for (let index = 0; index < str.length; index++) {
            if (str[index] == 'X') {
                if (str[index + 1] == 'C') {
                    number += 90;
                    index++;
                }
                else if (str[index + 1] == 'L') {
                    number += 40;
                    index++;
                }
                else {
                    number += 10;
                }
            }
            else if (str[index] == 'I') {
                if (str[index + 1] == 'X') {
                    number += 9;
                    index++;
                }
                else if (str[index + 1] == 'V') {
                    number += 4;
                    index++;
                }
                else {
                    number += 1;
                }
            }
            else if (str[index] == 'L') {
                number += 50;
            }
            else if (str[index] == 'V') {
                number += 5;
            }
            else if (str[index] == 'C') {
                if (str[index + 1] == 'D') {
                    number += 400;
                    index++;
                }
                else if (str[index + 1] == 'M') {
                    number += 900;
                    index++;
                }
                else {
                    number += 100;
                }
            }
            else if (str[index] == 'D') {
                number += 500;
            }
            else if (str[index] == 'M') {
                number += 1000;
            }
        }
        return number;
    }
}

const solution = new Solution();
let number = solution.romanToDecimal('MMMCMXCIX');
console.log(number);