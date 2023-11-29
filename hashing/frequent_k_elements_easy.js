/**
 * @description Given a non-empty array nums[] of integers of length N, find the top k elements which have the highest frequency in the array. If two numbers have same frequencies, then the larger number should be given more preference.
 * 
 * @link https://practice.geeksforgeeks.org/problems/top-k-frequent-elements-in-array/1
 *
 * @param { Number[] } arr
 * @param { Number } k
 * @returns { Number[] }
*/

class Solution {
    topK(nums, k) {
        // code here
        let countMap = new Map();
        for (let item of nums) {
            if (countMap.has(item)) {
                let itemCount = countMap.get(item);
                countMap.set(item, itemCount + 1);
            }
            else {
                countMap.set(item, 1);
            }
        }
        let finalElements = []; let finalNumbers = [];
        countMap.forEach((value, key) => {
            finalElements.push({ key, value });
        });
        // console.log(finalElements);
        finalElements.sort((a, b) => {
            // if (a['value'] === b['value'] && a['key'] < b['key']){
            //     console.log('in');
            //     return 1;
            // }
            // else if (a['value'] > b['value']){
            //     return -1;
            // } 
            // else if (a['value'] < b['value']){
            //     return 1;
            // }
            const freqComparison = b['value'] - a['value'];
            return freqComparison !== 0 ? freqComparison : b['key'] - a['key'];
        });
        // console.log(finalElements);
        for (let num = 0; num < k; num++) {
            finalNumbers.push(finalElements[num]['key']);
        }
        // return 1;
        return finalNumbers;
    }
}
