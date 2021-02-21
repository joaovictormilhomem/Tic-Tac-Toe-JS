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
            square.onclick = () => {}
        }
    else
        for(const square of squares) {
            square.onclick = () => {
                handleClick(square);
            }
        }
}

function handleClick(square) {
    if (isNotMarked(square)) {
        markSquare(square);
        if (!gameIsOver()) {   
            playerPlaying = playerPlaying === 'X'? 'O':'X';
        }
        else{
            let squares = getSquares();
            setOnclickOnSquares(squares, true);
            if(isDraw)
                setTitle('deu velha');
            else
                setTitle(`${playerPlaying} venceu`);
        }
    }
}

function markSquare(square) {
    square.innerHTML = playerPlaying;
    stageCopy[parseInt(square.id[6])] = playerPlaying;
}

function setTitle(text) {
    let title = document.getElementById('title');
    title.innerHTML = text;
}