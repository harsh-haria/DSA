/**
 * @description Given a String S, reverse the string without reversing its individual words. Words are separated by dots.
 * 
 * @link https://practice.geeksforgeeks.org/problems/reverse-words-in-a-given-string5459/1
 * 
 * @example
 * Input:
 * - S = i.like.this.program.very.much
 * - Output: much.very.program.this.like.i
 * 
 * @param {string} s
 * @returns {string}
*/


//incomplete
class Solution {
    //Function to reverse words in a given string.
    reverseWords(s) {
        // code here
        if (!s.length) {
            return null;
        }
        let anchorString;
        let char;
        for (char = 0; char < s.length; char++) {
            if (s[char] === '.') break;
            anchorString += s[char];
        }
        if (char) {
            char++;
        }
        let newString = '';
        for (; char < s.length; char++) {
            newString += s[char];
        }
    }
}