class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let i, j;
        const map = new Map();
        for (i = 0; i < nums.length; i++) {
            const diff = target - nums[i];
            if (map.has(diff)) {
                return [map.get(diff), i];
            } else {
                map.set(nums[i], i);
            }
        }
    }
}
