/**
 * 200. Number of Islands
 * Given an m x n 2D binary grid grid which represents 
 * a map of '1's (land) and '0's (water), return the number of islands.
 * 
 * An island is surrounded by water and is formed by connecting adjacent
 * lands horizontally or vertically. You may assume all four edges of
 * the grid are all surrounded by water.
 * 
 * Input: grid = [
 *  ["1","1","1","1","0"],
 *  ["1","1","0","1","0"],
 *  ["1","1","0","0","0"],
 *  ["0","0","0","0","0"]
 * ]
 * Output: 1
 * 
 * Input: grid = [
 *  ["1","1","0","0","0"],
 *  ["1","1","0","0","0"],
 *  ["0","0","1","0","0"],
 *  ["0","0","0","1","1"]
 * ]
 * Output: 3
 * 
 *  Hint this is like a graph problem and we should use dfs search
 */
type Grid = string[][];
export function numIslands(grid: Grid): number {
  let count = 0;
  
  for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
          if (grid[i][j] === "1") {
              const incrementNumber = dfs(grid, i, j);
              if (incrementNumber) {
                count = count + incrementNumber;
              }
          }
      }
  }

  function dfs(grid: Grid, row:number, col: number) {

    if (row < 0) return;
    if (row > grid.length - 1) return;
    if (col < 0) return;
    if (col > grid[row].length -1) return;
    if (grid[row][col] === '0') return;
    
    grid[row][col] = '0';
    dfs(grid, row + 1, col);
    dfs(grid, row - 1, col);
    dfs(grid, row, col + 1);
    dfs(grid, row, col - 1);
    
    return 1;
    
  }

  return count;
};