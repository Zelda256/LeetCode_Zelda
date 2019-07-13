/**
 * @param {number[]} nums
 * @return {number}
 */
// var maxProduct = function (nums) {
//   var maxArrs = [nums[0]];
//   var max = nums[0];
//   for (let i = 1; i < nums.length; ++i) {
//     var curNum = nums[i];
//     for (let j = 0; j < maxArrs.length; ++j) {
//       maxArrs[j] = maxArrs[j] * curNum;
//       if (maxArrs[j] > max) max = maxArrs[j];
//     }
//     maxArrs.push(curNum);
//     if (curNum > max) max = curNum;
//   }
//   return max;
// };

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  var result = nums[0], max = [nums[0]], min = [nums[0]];
  for (let i = 1; i < nums.length; ++i) {
    max[i] = Math.max(Math.max(nums[i], max[i - 1] * nums[i]), min[i - 1] * nums[i]);
    min[i] = Math.min(Math.min(nums[i], max[i - 1] * nums[i]), min[i - 1] * nums[i]);
    result = Math.max(result, max[i]);
  }
  return result;
};

const nums = [-1, -2, -9, -6];
const result = maxProduct(nums);
console.log(result);