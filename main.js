
let playerPlaying = 'X';
let stageCopy = [null, null, null, null, null, null, null, null, null];
startGame();

function startGame() {
    let squares = getSquares();
    setOnclickOnSquares(squares, false);
}

function getSquares() {
    return document.getElementsByClassName('square');
}

function setOnclickOnSquares(squares, isOver) {
    if (isOver)
        for(const square of squares) {
            square.onclick = () => {
                
            }
        }
    else
        for(const square of squares) {
            square.onclick = () => {
                squareIsClicked(square);
            }
        }
}

function squareIsClicked(square) {
    if (isNotMarked(square)) {
        markSquare(square);
        if (!gameIsOver()) {   
            changePlayerPlaying();
        }
        else{
            let squares = getSquares();
            setOnclickOnSquares(squares, true);
        }
    }
}

function markSquare(square) {
    square.innerHTML = playerPlaying;
    stageCopy[parseInt(square.id[6])] = playerPlaying;
}

function isNotMarked(square) {
    if(square.innerHTML === '' && stageCopy[parseInt(square.id[6])] === null)
        return true;
    else
        return false;
}

function changePlayerPlaying() {
    

    if (playerPlaying === 'X'){
        playerPlaying = 'O';
        setTitle('Jogador O');
    }
    else{
        playerPlaying = 'X';
        setTitle('Jogador X');
    }
}

function setTitle(text) {
    let title = document.getElementById('title');
    title.innerHTML = text;
}

function gameIsDraw(currentValue) {
    return currentValue !== null;
}

function playerPlayingWins(one,two,three) {
    if(stageCopy[one] === playerPlaying && stageCopy[two] === playerPlaying && stageCopy[three] === playerPlaying)
        return true;
}

function gameIsOver() {

    if (playerPlayingWins(0,1,2) || playerPlayingWins(3,4,5) || playerPlayingWins(6,7,8) || playerPlayingWins(0,3,6) ||
        playerPlayingWins(1,4,7) || playerPlayingWins(2,5,8) || playerPlayingWins(0,4,8) || playerPlayingWins(2,4,6))
    {
        setTitle(`${playerPlaying} venceu`);
        playerPlaying = null;
        return true;
    }

    else if (stageCopy.every(gameIsDraw)) {
        setTitle('deu velha');
        playerPlaying = null;
        return true;
    }

    return false;
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