/**
 * 
 * @description Given a matrix mat[][] of size N x M, where every row and column is sorted in increasing order, and a number X is given. The task is to find whether element X is present in the matrix or not.
 * 
 * @link https://practice.geeksforgeeks.org/problems/search-in-a-matrix17201720/1
 * 
 * @param {number[][]} matrix
 * @param {number} N
 * @param {number} M
 * @param {number} X
 * @returns {number}
*/

class Solution {

    matSearch(matrix, N, M, X) {
        // code here
        for (let row = 0; row < N; row++) {
            if (X >= matrix[row][0] && X <= matrix[row][M - 1]) {
                for (let col of matrix[row]) {
                    if (col == X) return 1;
                }
            }
        }
        return 0;
    }
}