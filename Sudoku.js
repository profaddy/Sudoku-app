let sudoku = [
  [3, 0, 6, 5, 0, 8, 4, 9, 0],
  [5, 2, 0, 0, 0, 0, 0, 0, 0],
  [0, 8, 7, 0, 0, 0, 0, 3, 1],
  [0, 0, 3, 0, 1, 0, 0, 8, 0],
  [9, 0, 0, 8, 0, 3, 0, 0, 5],
  [0, 5, 0, 0, 9, 0, 6, 0, 0],
  [1, 3, 0, 0, 0, 0, 2, 5, 0],
  [0, 0, 0, 0, 0, 0, 0, 7, 4],
  [0, 0, 5, 2, 0, 6, 3, 0, 0]
];

const isSuitableToPutXThere = (i, j, x) => {
  const n = 9;
  // Is 'x' used in row and collumn.
  for (let jj = 0; jj < n; jj++) {
    if (sudoku[i][jj] === x || sudoku[jj][j] === x) {
      return false;
    }
  }

  // Is 'x' used in sudoku 3x3 box.
  let boxRow = i - (i % 3);
  let boxColumn = j - (j % 3);

  for (let ii = 0; ii < 3; ii++) {
    for (let jj = 0; jj < 3; jj++) {
      if (sudoku[boxRow + ii][boxColumn + jj] == x) {
        return false;
      }
    }
  }
  // Everything looks good.
  return true;
};

//You can call the function isSuitableToPutXThere here passing coordinate and values
//i,j -> coordinates(x,y)
//x   -> value to be inserted
//isSuitableToPutXThere(i,j,x)
