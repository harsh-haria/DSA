// Second Largest (EASY)
/*
*   Given an array of positive integers arr[], return the second largest element from the array. If the second largest element doesn't exist then return -1.
    Note: The second largest element should not be equal to the largest element.
*/
// link: https://www.geeksforgeeks.org/batch/gfg-160-problems/track/arrays-gfg-160/problem/second-largest3735

public class SecondLargest {
    public static void main(String[] args) {
        int[] arr = {12,35,1,10,34,1};
        Solution sol = new Solution();
        int secondLargest = sol.getSecondLargest(arr);
        System.out.println(secondLargest);
    }
}

class Solution {
    public int getSecondLargest(int[] arr) {
        if (arr.length == 1) {
            return -1;
        }
        if (arr.length == 2) {
            if (arr[0] == arr[1]) {
                return -1;
            }
            if(arr[0]<arr[1]) {
                return arr[0];
            }
            else {
                return arr[1];
            }
        }

        int high = -1;
        int med = -1;

        high = arr[0];

        for(int pos=1; pos<arr.length; pos++) {
            if (arr[pos] < high) {
                med = arr[pos];
                break;
            }
            else if (arr[pos] > high) {
                med = high;
                high = arr[pos];
                break;
            }
        }

        if(med == -1) {
            return -1;
        }

        for(int pos = 2; pos < arr.length; pos++) {
            int element = arr[pos];
            if (element > med) {
                if (element > high) {
                    med = high;
                    high = element;
                }
                else if (element < high) {
                    med = element;
                }
            }
        }

        // use the algorithm to get the med value
        return med;
    }
}