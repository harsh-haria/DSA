// Move All Zeroes to End
/*
* You are given an array arr[] of non-negative integers.
* Your task is to move all the zeros in the array to the right end while maintaining the relative order of the non-zero elements.
* The operation must be performed in place, meaning you should not use extra space for another array.
*
* link: https://www.geeksforgeeks.org/batch/gfg-160-problems/track/arrays-gfg-160/problem/move-all-zeroes-to-end-of-array0751
*
* Time Complexity: O(n)
* Space Complexity: O(1)
*/

public class MoveZerosToEnd {
    public static void main(String[] args) {
        Solution solution = new Solution();
        int[] arr = {1,2,0,4,3,0,5,0};
        solution.pushZerosToEnd(arr);
        for(Integer ele: arr) {
            System.out.print(ele + " ");
        }
    }
}

class Solution {
    void pushZerosToEnd(int[] arr) {
        // code here
        int zeroHolder = 0;
        int nonZero = 1;

        while(arr[zeroHolder] != 0) {
            zeroHolder++;
            if (zeroHolder == arr.length) {
                return;
            }
        }

        if (zeroHolder == arr.length) {
            return;
        }

        nonZero = zeroHolder + 1;

        while(nonZero<arr.length) {
            if(arr[nonZero] == 0) {
                nonZero++;
                continue;
            }
            arr[zeroHolder] = arr[nonZero];
            arr[nonZero] = 0;
            zeroHolder++;
            nonZero++;
        }
        return;
    }
}