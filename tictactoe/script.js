const cells = document.querySelectorAll('.cell');
const message = document.getElementById('message');

let currentPlayer = 'X';
let gameActive = true;
let gameState = ['', '', '', '', '', '', '', '', ''];

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function handleResultValidation() {
    let roundWon = false;
    for (let i = 0; i < winPatterns.length; i++) {
        const winPattern = winPatterns[i];
        let a = gameState[winPattern[0]];
        let b = gameState[winPattern[1]];
        let c = gameState[winPattern[2]];
        if (a === '' || b === '' || c === '') {
            continue;
        }
        if (a === b && b === c) {
            roundWon = true;
            break;
        }
    }

    if (roundWon) {
        message.innerText = `${currentPlayer} wins!`;
        gameActive = false;
        return;
    }

    if (!gameState.includes('')) {
        message.innerText = "It's a tie!";
        gameActive = false;
        return;
    }

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    message.innerText = `${currentPlayer}'s turn`;
}

function makeMove(cellIndex) {
    if (!gameActive || gameState[cellIndex] !== '') return;

    gameState[cellIndex] = currentPlayer;
    cells[cellIndex].innerText = currentPlayer;

    handleResultValidation();
}

function reset() {
    currentPlayer = 'X';
    gameActive = true;
    gameState = ['', '', '', '', '', '', '', '', ''];
    message.innerText = `${currentPlayer}'s turn`;

    cells.forEach(cell => {
        cell.innerText = '';
    });
}

