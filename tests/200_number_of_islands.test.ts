import { numIslands } from '../src/200_number_of_islands';

describe('Number of Islands', () => {
  it('returns 1 for a grid of one island', () => {
    const testGrid  = [
      ["1","1","1","1","0"],
      ["1","1","0","1","0"],
      ["1","1","0","0","0"],
      ["0","0","0","0","0"]
    ];

    expect(numIslands(testGrid)).toEqual(1);
  });

  it('returns 3 for a grid of 3 islands', () => {
    const grid = [
      ["1","1","0","0","0"],
      ["1","1","0","0","0"],
      ["0","0","1","0","0"],
      ["0","0","0","1","1"]
    ];

    expect(numIslands(grid)).toEqual(3);
  })
});