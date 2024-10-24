const boardSize = 10;
const numBombs = 15;
let board = [];
let bombLocations = [];

const gameBoardDiv = document.getElementById('game-board');

function initGame() {
    board = Array(boardSize).fill().map(() => Array(boardSize).fill(0));
    bombLocations = [];
    
    // Place bombs randomly
    let bombsPlaced = 0;
    while (bombsPlaced < numBombs) {
        const row = Math.floor(Math.random() * boardSize);
        const col = Math.floor(Math.random() * boardSize);
        if (board[row][col] !== 'B') {
            board[row][col] = 'B';
            bombLocations.push([row, col]);
            bombsPlaced++;
        }
    }
    
    // Calculate adjacent bomb counts
    for (let row = 0; row < boardSize; row++) {
        for (let col = 0; col < boardSize; col++) {
            if (board[row][col] !== 'B') {
                board[row][col] = countAdjacentBombs(row, col);
            }
        }
    }
    
    renderBoard();
}

function countAdjacentBombs(row, col) {
    let count = 0;
    for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
            const newRow = row + i;
            const newCol = col + j;
            if (isValidCell(newRow, newCol) && board[newRow][newCol] === 'B') {
                count++;
            }
        }
    }
    return count;
}

function isValidCell(row, col) {
    return row >= 0 && row < boardSize && col >= 0 && col < boardSize;
}

function renderBoard() {
    gameBoardDiv.innerHTML = '';
    gameBoardDiv.style.gridTemplateColumns = `repeat(${boardSize}, 40px)`;

    for (let row = 0; row < boardSize; row++) {
        for (let col = 0; col < boardSize; col++) {
            const cell = document.createElement('div');
            cell.className = 'cell';
            cell.dataset.row = row;
            cell.dataset.col = col;
            cell.onclick = () => revealCell(row, col);
            gameBoardDiv.appendChild(cell);
        }
    }
}

function revealCell(row, col) {
    const cell = document.querySelector(`.cell[data-row='${row}'][data-col='${col}']`);
    
    if (cell.classList.contains('revealed')) return; // Already revealed

    cell.classList.add('revealed');
    
    if (board[row][col] === 'B') {
        cell.classList.add('bomb');
        cell.innerHTML = '💣';
        gameOver();
    } else {
        cell.innerHTML = board[row][col] === 0 ? '' : board[row][col];
        if (board[row][col] === 0) {
            // Reveal adjacent cells
            revealAdjacentCells(row, col);
        }
    }
    
    checkWin();
}

function revealAdjacentCells(row, col) {
    for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
            const newRow = row + i;
            const newCol = col + j;
            if (isValidCell(newRow, newCol)) {
                revealCell(newRow, newCol);
            }
        }
    }
}

function gameOver() {
    alert('Game Over! You hit a bomb.');
    // Reveal all bombs
    bombLocations.forEach(([row, col]) => {
        const cell = document.querySelector(`.cell[data-row='${row}'][data-col='${col}']`);
        cell.classList.add('bomb');
        cell.innerHTML = '💣';
    });
}

function checkWin() {
    const revealedCells = document.querySelectorAll('.cell.revealed').length;
    const totalCells = boardSize * boardSize;
    
    if (revealedCells === totalCells - numBombs) {
        alert('You Win!');
    }
}

function resetGame() {
    initGame();
}

initGame();
