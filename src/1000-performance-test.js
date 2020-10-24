'use strict'

const {twoSum, twoSumV2} = require('./0001-two-sum')

/**
 * Compare time taken executing 2 functions
 *
 * @param {Function} fn1 First function
 * @param {Function} fn2 Second function
 * @param {number} n Number of times to iterate
 */
function compareFunction(fn1, fn2, n = 1) {
  console.time('Fn1')
  for (let i = 0; i < n; i++) {
    fn1([2, 7, 11, 15], 9)
  }
  console.timeEnd('Fn1')
  console.time('Fn2')
  for (let i = 0; i < n; i++) {
    fn2([2, 7, 11, 15], 9)
  }
  console.timeEnd('Fn2')
}

compareFunction(twoSumV2, twoSum, 100000)
