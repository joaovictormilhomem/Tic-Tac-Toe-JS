
let playerPlaying = 'X';
let stageCopy = [null, null, null, null, null, null, null, null, null];
startGame();

function startGame() {
    let squares = getSquares();
    setOnclickOnSquares(squares);
}

function getSquares() {
    return document.getElementsByClassName('square');
}

function setOnclickOnSquares(squares) {
    for(const square of squares) {
        square.onclick = () => {
            squareIsClicked(square);
        }
    }
}

function squareIsClicked(square) {
    if (checkIfIsNotMarked(square)) {
        markSquare(square);
        changePlayerPlaying();
    }
}

function markSquare(square) {
    square.innerHTML = playerPlaying;
    stageCopy[parseInt(square.id[6])] = playerPlaying;
}

function checkIfIsNotMarked(square) {
    if(square.innerHTML === '' && stageCopy[parseInt(square.id[6])] === null)
        return true;
    else
        return false;
}

function changePlayerPlaying() {
    if (playerPlaying === 'X')
        playerPlaying = 'O';
    else
        playerPlaying = 'X';
}

function checkGameOver() {
    let squares = getSquares();

    for(const square of squares) {
        
    }
}

/* 

0 3 6
1 4 7
2 5 8

012
345
678
036
147
258
048
246 

*/