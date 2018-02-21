

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

}