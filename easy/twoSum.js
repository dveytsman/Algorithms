// Solutions to the easy problems
// Problem 1.
const twoSum = (nums, target) => {
  let trackingObject = {};
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    let missingElement = target - num;
    if (missingElement in trackingObject) {
      return [i, trackingObject[missingElement]];
    } else {
      trackingObject[num] = i;
    }
  }
  return [];
};
