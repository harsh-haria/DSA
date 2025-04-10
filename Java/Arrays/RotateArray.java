/* Rotate Array
*
* Given an array arr[].
* Rotate the array to the left (counter-clockwise direction) by d steps, where d is a positive integer.
* Do the mentioned change in the array in place.
* Note: Consider the array as circular.
*
* Link: https://www.geeksforgeeks.org/batch/gfg-160-problems/track/arrays-gfg-160/problem/rotate-array-by-n-elements-1587115621
*
* Time Complexity: O(n)
* Space Complexity: O(1)
*/

public class RotateArray {
    public static void main(String[] args) {
        Solution solution = new Solution();
        int[] arr = {1,2,3,4,5};
        int d = 9;
        solution.rotateArr(arr, d);
        for(Integer ele: arr) {
            System.out.print(ele + " ");
        }
    }
}

class Solution {
    // Function to rotate an array by d elements in counter-clockwise direction.
    static void reverseIt(int arr[], int start, int end) {
        if(start == end) {
            return;
        }
        while(start<end) {
            int placeholder = arr[start];
            arr[start] = arr[end];
            arr[end] = placeholder;
            start++;
            end--;
        }
        return;
    }

    static void rotateArr(int arr[], int d) {
        // add your code here
        int actualRotation = d % arr.length;
        if (actualRotation == arr.length) {
            return;
        }
        // System.out.println(actualRotation);

        reverseIt(arr,0,actualRotation-1);
        reverseIt(arr,actualRotation,arr.length-1);
        reverseIt(arr,0,arr.length-1);
    }
}