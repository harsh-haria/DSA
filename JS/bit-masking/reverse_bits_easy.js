const Math = require('mathjs');

/**
 * @param {number} N
 * @return {number}
 */

class Solution {
    reverseBits(N) {
        //code here
        if (N == 1 || N == 2) {
            return 1;
        }
        // let answer = [];
        let answer = ``;
        while (N > 0) {
            if(N%2 == 0){
                // answer.push(0);
                answer += '0';
                N = N/2;
            }
            else if(N%2==1){
                // answer.push(1);
                answer += '1';
                N = (N-1)/2;
            }
            if(N==1){
                // answer.push(1);
                answer += '1';
                break;
            }
        }
        // console.log(answer);
        let stringLength = answer.length;
        answer = answer.split('').reverse().join('');
        let finalAnswer = 0;
        for(let pos = 0; pos<stringLength; pos++){
            let num = +answer[pos];
            finalAnswer += (num * Math.pow(2,pos));
        }
        return finalAnswer;
    }
}

let solution = new Solution();
let array = solution.reverseBits(13);
console.log(array);
