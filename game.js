let playerPlaying = 'X';
let stageCopy = [null, null, null, null, null, null, null, null, null];
let isDraw = false;

function isNotMarked(square) {
    if(stageCopy[parseInt(square.id[6])] === null)
        return true;
    else
        return false;
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
        return true;
    }

    else if (stageCopy.every(gameIsDraw)) {
        isDraw = true;
        return true;
    }

    return false;
}