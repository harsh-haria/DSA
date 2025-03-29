/**
 * @description Given an unsorted array Arr of N positive and negative numbers. Your task is to create an array of alternate positive and negative numbers without changing the relative order of positive and negative numbers.
Note: Array should start with a positive number and 0 (zero) should be considered a positive element.
 * 
 * @param {Number[]} arr
 * @param {Number} n
 * @returns {Number[]}
 */

class Solution {
    rearrange(arr, n) {
        //code here
        let positiveArray = [];
        let negativeArray = [];
        let answerArray = [];

        for (let number of arr) {
            if (number >= 0) {
                positiveArray.push(number);
            }
            else {
                negativeArray.push(number);
            }
        }
        let posi = 0;
        let negi = 0;

        let flag = true;
        while (posi < positiveArray.length && negi < negativeArray.length) {
            if (flag) {
                answerArray.push(positiveArray[posi++]);
            }
            else {
                answerArray.push(negativeArray[negi++]);
            }
            flag = !flag;
        }
        if (negi == negativeArray.length) {
            while (posi < positiveArray.length) {
                answerArray.push(positiveArray[posi++]);
            }
        }
        if (posi == positiveArray.length) {
            while (negi < negativeArray.length) {
                answerArray.push(negativeArray[negi++]);
            }
        }
        return answerArray;
    }
}

let solution = new Solution();
let inputArray = [1, -2, 3, 5, 0, -3, -2];
let arrayOutput = solution.rearrange(inputArray);
console.log(arrayOutput);