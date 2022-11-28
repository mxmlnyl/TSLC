
export const bubbleSort = (nums: number[]): number[] => {
  for (let i = 0; i < nums.length - 1; i++ ) {
    for (let j = 0; j < nums.length - i; j++) {
      if (nums[j] > nums[j + 1]) {
        // destructuring assignment
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
      }
    }
  }
  return nums;
}