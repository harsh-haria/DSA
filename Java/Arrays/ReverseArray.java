// Reverse an Array
/*
* You are given an array of integers arr[]. Your task is to reverse the given array.
* Note: Modify the array in place.
*
* link: https://www.geeksforgeeks.org/batch/gfg-160-problems/track/arrays-gfg-160/problem/reverse-an-array
*
* Time Complexity: O(n)
* Space Complexity: O(1)
*/

public class ReverseArray {
    public static void main(String[] args) {
        Solution solution = new Solution();
        int[] arr = {1,2,3,4,5};
        solution.reverseArray(arr);
        for(Integer ele: arr) {
            System.out.print(ele + " ");
        }
    }
}

class Solution {
    public void reverseArray(int arr[]) {
        // code here
        int left = 0;
        int right = arr.length-1;

        while(left<=right) {
            int holder = arr[left];
            arr[left++] = arr[right];
            arr[right--] = holder;
            // left++;
            // right--;
        }
        return;
    }
}