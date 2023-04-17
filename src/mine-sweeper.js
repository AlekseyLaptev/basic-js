const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function getNumberOfMines(matrix, i, j) {
  const startI = i === 0 ? i : i - 1;
  const startJ = j === 0 ? j : j - 1;
  const endI = i === matrix.length - 1 ? i : i + 1;
  const endJ = j === matrix[0].length - 1 ? j : j + 1;
  let res = 0;
  for (let x = startI; x <= endI; x++) {
    for (let y = startJ; y <= endJ; y++) {
      if (matrix[x][y]) {
        res++;
      }
    }
  }
  return res;
}

function minesweeper(matrix) {
  const gameField = [];
  for (let i = 0; i < matrix.length; i++) {
    gameField[i] = [];
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j]) {
        gameField[i].push(1);
      } else {
        const value = getNumberOfMines(matrix, i, j);
        gameField[i].push(value);
      }
    }
  }
  return gameField;
}

module.exports = {
  minesweeper
};
