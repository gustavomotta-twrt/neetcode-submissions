class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const map = new Map();
        let i;
        for (i = 0; i < nums.length; i++) {
            console.log(nums[i]);
            if (map.has(nums[i])) {
                console.log("passou por aqui")
                return true;
            } else {
                map.set(nums[i], i);
            }
        }
        return false;
    }
}
