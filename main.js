
<<<<<<< HEAD

function verticalWinCondition(playerCoin, column){
    var coinCount=null;
    var winCondition=false;
    for (var i =0; i<slot.length; i++){
        if(coinCount===4) {
            winCondition = true;
            return
        } else if(column[i]===playerCoin){
            coinCount++
        } else{
            coinCount=0;
        }
    }
}

function diagonalCheck(playerCoin, column, row){
    var coinCount=null;
    var wincondition=false;


// Function to check horizontal win condition. Player to test and row the coin as added to are parameters.
function horizontalCheck(player, row){
    var count = 0;
    var winCondition = false;
    for (var i = 0; i < masterArray.length; i++){
        if(player === masterArray[i][row]){
            count++
            if(count === 4){
                win = true;
                return win;
            } else {
                count = 0;
            }
        }
    }
    return false;
};