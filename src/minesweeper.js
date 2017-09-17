const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
  let board = [];
  for (let rows = 0; rows < numberOfRows; rows++) {
    let row = [];

    for (let columns = 0; columns < numberOfColumns; columns++) {
      row.push(' ');
      board.push(row);
    }
    return board;
  }
}

const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
  let board = [];
  for (let rows = 0; rows < numberOfRows; rows++) {
    let row = [];

    for (let columns = 0; columns < numberOfColumns; columns++) {
      row.push(null);

    }
    board.push(row);
  }

const getNumberOfBombs = (bombBoard, rowIndex, columnIndex) => {

const neighborOffsets = [

  [-1, -1],
  [-1, 0],
  [-1, 1],
  [0, -1],
  [0, 1],
  [1, -1],
  [1, 0],
  [1, 1],


];

const numberOfRows = bombBoard.length;
const numberOfColumns = bombBoard[0].length;
let numberOfBombs = 0;

neighborOffsets.forEach(offset => {
  const neighborRowIndex = rowIndex + offset[0];
  const neighborColumnIndex = columnIndex + offset[1];
  //^^ Might be screwed up.


if (neighborRowIndex >= 0 && neighborRowIndex < numberOfRows && neighborColumnIndex >= 0 && neighborColumnIndex < numberOfColumns ) {

  if(bombBoard[neighborRowIndex][0] == 'B') {
  numberOfBombs++;
  }

}

return numberOfBombs;

const flipTile = (playerBoard, bombBoard, rowIndex, columnIndex) => {

  if (playerBoard[rowIndex][columnIndex] !== ' ') {
console.log('This tile has already been flipped!');

  }

else if (playerBoard[rowIndex][columnIndex] === 'B') {
  playerBoard[rowIndex][columnIndex] = 'B';
}


else {
  playerBoard[rowIndex][columnIndex] = getNumberOfNeighborBombs(bombBoard, rowIndex, columnIndex);
}


};







});




};






let numberOfBombsPlaced = 0;

while (numberOfBombsPlaced < numberOfBombs) {
  let randomRowIndex = Math.floor(Math.random() * numberOfRows);
  let randomColumnIndex = Math.floor(Math.random() * numberOfColumns);

  if (board[randomRowIndex][randomColumnIndex] !== 'B') {
    board[randomRowIndex][randomColumnIndex] = 'B';
numberOfBombsPlaced++;
  }


  board[randomRowIndex][randomColumnIndex] = 'B';
numberOfBombsPlaced++;
//This will place bombs on existing bombs too sometimes
}

    return board;
};


const printBoard = (board) => {
  console.log(board.map(row => row.join(' | ')).join('\n'));
}


let playerBoard = generatePlayerBoard(3, 4);

let bombBoard = generateBombBoard(3, 4, 5);


console.log('Player Board : ' + printBoard(playerBoard));
console.log('Bomb Board: ' + printBoard(bombBoard));



flipTile(playerBoard, bombBoard, 0, 0);
console.log('Updated player Board:');
printBoard(playerBoard);
