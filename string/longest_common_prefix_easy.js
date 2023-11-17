/**
 * @param {string[]} arr
 * @param {number} n
 * @returns {string}
 */

class Solution {
    longestCommonPrefix(arr, n) {
        //code here
        if (n === 1) {
            return arr[0];
        }
        //loop through all the elements
        //compare lengths and pick smaller length
        //keep checking for each character and store it in the array
        //after looping through all elements return

        let ans = '';
        ans = arr[0];
        for (let index = 1; index < n; index++) {
            let ansLength = ans.length;
            let newLength = arr[index].length;
            let lessLength = Math.min(ansLength, newLength)
            let newString = '';
            for (let char = 0; char < lessLength; char++) {
                if (arr[index][char] === ans[char]) {
                    newString += ans[char];
                }
                else {
                    break;
                }
            }
            ans = newString;
        }
        return ans;
    }
}

let solution = new Solution();
let arr = [
    'geeksforgeeks', 'geeks', 'geek', 'geezer'
]
let commonPrefix = solution.longestCommonPrefix(arr, arr.length);
console.log(commonPrefix);