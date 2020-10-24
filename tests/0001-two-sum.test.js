/**
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * You can return the answer in any order.
 * 
 * Example 1:
 * 
 * Input: nums = [2,7,11,15], target = 9
 * Output: [0,1]
 * Output: Because nums[0] + nums[1] == 9, we return [0, 1].
 * Example 2:
 * 
 * Input: nums = [3,2,4], target = 6
 * Output: [1,2]
 * Example 3:
 * 
 * Input: nums = [3,3], target = 6
 * Output: [0,1]
 * 
 * Constraints:
 * 
 *  2 <= nums.length <= 105
 *  -109 <= nums[i] <= 109
 *  -109 <= target <= 109
 *  Only one valid answer exists.
 * 
 */


const {twoSum, twoSumV2} = require('../src/0001-two-sum')

describe('Given an array of integers nums and an integer target', () => {
  test('twoSum - should return the indices of the two numbers such that they add up to the target', () => {
    expect(twoSum([2,7,11,15], 9)).toMatchObject([0, 1])
    expect(twoSum([3,2,4], 6)).toMatchObject([1, 2])
    expect(twoSum([2, 3, 4], 6)).toMatchObject([0, 2])
  });

  test('twoSumV2 - should return the indices of the two numbers such that they add up to the target', () => {
    expect(twoSumV2([2,7,11,15], 9)).toMatchObject([0, 1])
    expect(twoSumV2([3,2,4], 6)).toMatchObject([1, 2])
    expect(twoSumV2([2, 3, 4], 6)).toMatchObject([0, 2])
  });
});
