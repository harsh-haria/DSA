/**
 * @description You are given a matrix of dimensions n x m. The task is to perform boundary traversal on the matrix in a clockwise manner.
 * 
 * @link https://practice.geeksforgeeks.org/problems/boundary-traversal-of-matrix-1587115620/1
 * 
 * @param {number[][]} matrix
 * @param {number} n
 * @param {number} m
 * @returns {number[]}
*/

class Solution {
    //Function to return list of integers that form the boundary 
    //traversal of the matrix in a clockwise manner.
    boundaryTraversal(matrix, n, m) {
        //top
        let returner = [];
        for (let item of matrix[0]) {
            returner.push(item);
        }

        //right
        if (n > 1) {
            for (let index = 1; index < n - 1; index++) {
                returner.push(matrix[index][m - 1]);
            }
        }

        //down
        if (n > 1) {
            for (let item = m - 1; item >= 0; item--) {
                returner.push(matrix[n - 1][item]);
            }
        }

        //left
        if (n > 1 && m > 1) {
            for (let index = n - 2; index > 0; index--) {
                returner.push(matrix[index][0]);
            }
        }
        return returner;
    }
}

const solution = new Solution();
let matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
]

let boundary = solution.boundaryTraversal(matrix, 4, 4);
console.log(boundary);