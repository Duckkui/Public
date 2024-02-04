const player1 = 'X';
const player2 = 'O';
let currentPlayer = player1;
let gameActive = true;
let gameState = ['', '', '', '', '', '', '', '', ''];

const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

const message = document.getElementById('message');

function checkWin() {
  for (let i = 0; i < winningConditions.length; i++) {
    const [a, b, c] = winningConditions[i];
    if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
      gameActive = false;
      message.innerText = `${currentPlayer} ganador!`;
    }
  }
  if (!gameState.includes('') && gameActive) {
    gameActive = false;
    message.innerText = "Es un empate!";
  }
}

function placeMark(cellIndex) {
  if (gameState[cellIndex] === '' && gameActive) {
    gameState[cellIndex] = currentPlayer;
    document.getElementsByClassName('cell')[cellIndex].innerText = currentPlayer;
    checkWin();
    currentPlayer = currentPlayer === player1 ? player2 : player1;
  }
}

function resetGame() {
  gameState = ['', '', '', '', '', '', '', '', ''];
  gameActive = true;
  currentPlayer = player1;
  message.innerText = '';
  const cells = document.getElementsByClassName('cell');
  for (let i = 0; i < cells.length; i++) {
    cells[i].innerText = '';
  }
}
