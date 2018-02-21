
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

function diagonalCheck(playerCoin, column, row) {
    var coinCount = null;
    var wincondition = false;
}
function diagonalCheckForward(player, row, column){
    row += 5;
    column += 5;
    var count = 0;
    var win = false;
    while(row >= 0){
        if(row <= 5 && column >= 0 && column <= 6){
            if(player === masterArray[column][row]){
                count++;
                if(count === 4){
                    win = true;
                    return win;
                }
            } else {
                count = 0;
            }
        }
        column--;
        row--;
    }
    return false;
    }

// Function to check horizontal win condition. Player to test and row the coin as added to are parameters.
function horizontalCheck(player, row){
    var count = 0;
    var winCondition = false;
    for (var col = 0; i < masterArray.length; col++){
        if(player === masterArray[col][row]){
            count++;
            if(count === 4){
                wincondition = true;
                return wincondition;
            } else {
                count = 0;
            }
        }
    }
    return false;
}