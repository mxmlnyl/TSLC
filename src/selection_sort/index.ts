/**
 * We use three pointers
 * two loops
 */

type numArr = number[];
export const selectionSort = (nums: numArr): numArr => {
  for (let i = 0; i < nums.length - 1; i++) {
    let minIndex = i;
    // j will always be the next value past i;
    // j will also check the last value that i will never get to.
    for (let j = i + 1;  j < nums.length; j++) {
      if(nums[j] < nums[minIndex]) {
        minIndex = j;
      }
    }
    // flips the value
    [nums[i], nums[minIndex]] = [nums[minIndex], nums[i]];
  }

  return nums; 
}