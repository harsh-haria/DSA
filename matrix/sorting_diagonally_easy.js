/**
 * @link https://practice.geeksforgeeks.org/problems/diagonal-morning-assembly0028/1
 * 
 * @param {number[][]} matrix
 * @param {number} n
 * @param {number} m
 * @returns { }
*/

class Solution {
    diagonalSort(matrix, n, m) {
        let x = 0, y = 0;
        let pushX = 0, pushY = 0;
        let pullX = 0, pullY = 0;
        for (; y < m; y++) {
            pullX = pushX = x;
            pullY = pushY = y;
            let xArray = [];
            if (x == y) {
                continue;
            }
            while (pullX < n && pullY < m) {
                xArray.push(matrix[pullX][pullY]);
                pullX++; pullY++;
            }
            // console.log(xArray);
            xArray.sort(function (a, b) { return b - a });
            let xIndex = 0;
            while (pushX < n && pushY < m) {
                // xArray.push(matrix[pushX][pushY]);
                matrix[pushX][pushY] = xArray[xIndex++];
                pushX++; pushY++;
            }
        }
        x = 0; y = 0;
        for (; x < n; x++) {
            pullX = pushX = x;
            pullY = pushY = y;
            let xArray = [];
            if (x == y) {
                continue;
            }
            while (pullX < n && pullY < m) {
                xArray.push(matrix[pullX][pullY]);
                pullX++; pullY++;
            }
            // console.log(xArray);
            xArray.sort(function (a, b) { return a - b });
            let xIndex = 0;
            while (pushX < n && pushY < m) {
                // xArray.push(matrix[pushX][pushY]);
                matrix[pushX][pushY] = xArray[xIndex++];
                pushX++; pushY++;
            }
        }
        for (let row of matrix) {
            let string = ``;
            for (let item = 0; item < row.length; item++) {
                if (item === row.length - 1) {
                    string += row[item];
                    continue;
                }
                string += row[item] + ' ';
            }
            console.log(string);
        }
    }
}

let solution = new Solution();
let matrix = [
    [3, 6, 3, 8, 2],
    [4, 1, 9, 5, 9],
    [5, 7, 2, 4, 8],
    [8, 3, 1, 7, 6]
];
let n = 4;
let m = 5;
let sorter = solution.diagonalSort(matrix, n, m);
// console.log("matrix:", sorter);
