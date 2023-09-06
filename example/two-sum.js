var twoSum = function (nums, target) {
  const numMap = {}; 
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (numMap[complement] !== undefined) {
      return [numMap[complement], i];
    }
    numMap[nums[i]] = i;
  }
  return [];
};

const nums = [2, 1, 7, 15];
const target = 16;
const result = twoSum(nums, target);
console.log(result); // Output: [1, 3]
