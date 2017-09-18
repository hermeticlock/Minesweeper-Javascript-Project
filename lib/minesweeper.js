'use strict';

var generatePlayerBoard = function generatePlayerBoard(numberOfRows, numberOfColumns) {
  var board = [];
  for (var rows = 0; rows < numberOfRows; rows++) {
    var row = [];

    for (var columns = 0; columns < numberOfColumns; columns++) {
      row.push(' ');
      board.push(row);
    }
    return board;
  }
};

var generateBombBoard = function generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs) {
  var board = [];
  for (var rows = 0; rows < numberOfRows; rows++) {
    var row = [];

    for (var columns = 0; columns < numberOfColumns; columns++) {
      row.push(null);
    }
    board.push(row);
  }

  var numberOfBombsPlaced = 0;

  while (numberOfBombsPlaced < numberOfBombs) {
    var randomRowIndex = Math.floor(Math.random() * numberOfRows);
    var randomColumnIndex = Math.floor(Math.random() * numberOfColumns);

    if (board[randomRowIndex][randomColumnIndex] !== 'B') {
      board[randomRowIndex][randomColumnIndex] = 'B';
      numberOfBombsPlaced++;
    }
  }

  return board;
};

var getNumberOfNeighborBombs = function getNumberOfNeighborBombs(bombBoard, rowIndex, columnIndex) {

  var neighborOffsets = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];

  var numberOfRows = bombBoard.length;
  var numberOfColumns = bombBoard[0].length;
  var numberOfBombs = 0;

  neighborOffsets.forEach(function (offset) {
    var neighborRowIndex = rowIndex + offset[0];
    var neighborColumnIndex = columnIndex + offset[1];
    //^^ Might be screwed up.


    if (neighborRowIndex >= 0 && neighborRowIndex < numberOfRows && neighborColumnIndex >= 0 && neighborColumnIndex < numberOfColumns) {

      if (bombBoard[neighborRowIndex][0] == 'B') {
        numberOfBombs++;
      }
    }
  });
  return numberOfBombs;
};

var flipTile = function flipTile(playerBoard, bombBoard, rowIndex, columnIndex) {

  if (playerBoard[rowIndex][columnIndex] !== ' ') {
    console.log('This tile has already been flipped!');
  } else if (playerBoard[rowIndex][columnIndex] === 'B') {
    playerBoard[rowIndex][columnIndex] = 'B';
  } else {
    playerBoard[rowIndex][columnIndex] = getNumberOfNeighborBombs(bombBoard, rowIndex, columnIndex);
  }
};

var printBoard = function printBoard(board) {
  console.log(board.map(function (row) {
    return row.join(' | ');
  }).join('\n'));
};

var playerBoard = generatePlayerBoard(3, 4);

var bombBoard = generateBombBoard(3, 4, 5);

console.log('Player Board : ' + printBoard(playerBoard));
console.log('Bomb Board: ' + printBoard(bombBoard));

flipTile(playerBoard, bombBoard, 0, 0);
console.log('Updated player Board:');
printBoard(playerBoard);