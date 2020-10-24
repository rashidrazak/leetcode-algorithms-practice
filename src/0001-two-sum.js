'use strict'

/**
 * Two Sum
 *
 * @param {number[]} nums Source array
 * @param {number[]} target Array of indices
 */
function twoSum(nums, target) {
  const previousValues = {}
  for (let i = 0; i < nums.length; i++) {
    const currentNumber = nums[i]
    const neededValue = target - currentNumber

    if (previousValues[neededValue] !== undefined) return [previousValues[neededValue], i]
    previousValues[currentNumber] = i
  }
}

/**
 * Two Sum
 *
 * @param {number[]} nums Source array
 * @param {number[]} target Array of indices
 */
function twoSumV2(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    const currentValue = nums[i] // This is the current value
    const complement = target - currentValue // Given the current value above, we need this to reach target
    const complementIndex = nums.findIndex((x) => x === complement) // Try to find the index of target (if exists)

    // If target exists in nums and the index is not the currentValue index
    if (complementIndex !== -1 && complementIndex !== i) return [complementIndex, i].sort()
  }
}

module.exports = {twoSum, twoSumV2}
