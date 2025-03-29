/**
 * 
 * @description There are n trees in a forest. The heights of the trees is stored in array tree[], where tree[i] denotes the height of the ith tree in the forest. If the ith tree is cut at a height H, then the wood collected is tree[i] - H, provided tree[i] > H. If the total woods that needs to be collected is exactly equal to k, find the height H at which every tree should be cut (all trees have to be cut at the same height). If it is not possible then return -1 else return H.
 * 
 * @link https://practice.geeksforgeeks.org/problems/binary-search-in-forest--141631/1
 * 
 * @param {number[]} tree
 * @param {number} n
 * @param {number} k
 * @returns {number}
 */

function isValidCut(height, k, tree) {
    let woodCollected = 0;

    for (const treeHeight of tree) {
        if (treeHeight > height) {
            woodCollected += treeHeight - height;
        }
    }

    return woodCollected >= k;
}

class Solution {
    find_height(tree, n, k) {
        //code here

        let left = 0;
        let right = Math.max(...tree);
        let result = -1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);

            if (isValidCut(mid, k, tree)) {
                result = mid;
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return result;
    }
}