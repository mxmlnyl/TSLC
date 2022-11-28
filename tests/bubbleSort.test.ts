import { bubbleSort } from '../src/bubble_sort';

describe('Bubble Sort', () => {
  it('properly sorts an unsorted array', () => {
    const sorted = [1,4,6,7,9];
    const unsorted = [4,1,9,7,6];
    expect(bubbleSort(unsorted)).toEqual(sorted);
  });
  it('sorts an already sorted arr', () => {
    const sorted = [2,5, 6, 7,8,9];
    expect(bubbleSort(sorted)).toEqual(sorted);
  });
});