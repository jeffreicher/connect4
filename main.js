

function verticalWinCondition(playerCoin, column){
    var coinCount=null;
    var winCondition=false;
    for (var i =0; i<column.length; i++){
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

function diagonalCheckDownRight(playerCoin, column, row){
    var coinCount=null;
    var wincondition=false;
    row=row+5;
    column = column-5;
    while(row>=0){
        if(row<=5 && column>=0 && column<=6){
            column++;
            row --;
            if(masterArray[column][row]===playerCoin){
                count++;
                    if(count===4){
                        wincondition=true;
                    }
            } else{
                count=0;
            }
        }
    }
}


// Function to check horizontal win condition. Player to test and row the coin as added to are parameters.
function horizontalCheck(player, row){
    var count = 0;
    var winCondition = false;
    for (var i = 0; i < masterArray.length; i++){
        if(player === masterArray[i][row]){
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