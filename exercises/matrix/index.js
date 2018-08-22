// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  let mat = [];

  for (let i = 0; i < n; i++) {
    mat.push([]);
  }

  let counter = 1;
  let startCol = startRow = 0;
  let endCol = endRow = n - 1;

  while (startCol <= endCol && startRow <= endRow) {
    // top row
    for (let i = startCol; i <= endCol; i++) {
      mat[startRow][i] = counter;
      counter++;
    }
    startRow++;

    // right col
    for (let i = startRow; i <= endRow; i++) {
      mat[i][endCol] = counter;
      counter++;
    }
    endCol--;

    // bottom row
    for (let i = endCol; i >= startCol; i--) {
      mat[endRow][i] = counter;
      counter++;
    }
    endRow--;

    // left col
    for (let i = endRow; i >= startRow; i--) {
      mat[i][startCol] = counter;
      counter++;
    }
    startCol++;
  }

  return mat;
}

module.exports = matrix;
