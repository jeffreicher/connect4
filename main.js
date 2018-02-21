

function createCoin(){
    var player='player1';
    $('<div>').addClass(player)
}
function columnClicked(){
    var column = $(this).attr('class');
    var rows = []
}



function verticalWinCondition(playerCoin, column){
    var coinCount=null;
    var winCondition=false;
    for (var i =0; i<masterArray[column].length; i++){
        if(coinCount===4) {
            winCondition = true;
            return winCondition;
        } else if(masterArray[column][i]===playerCoin){
            coinCount++
        } else{
            coinCount=0;
        }
    }
    return winCondition;
}

function diagonalCheckDownLeft(player, row, column){
    row += 5;
    column += 5;
    var count = 0;
    var winCondition = false;
    while(row >= 0){
        if(row <= 5 && column >= 0 && column <= 6){
            if(player === masterArray[column][row]){
                count++;
                if(count === 4){
                    winCondition = true;
                    return winCondition;
                }
            } else {
                count = 0;
            }
        }
        column--;
        row--;
    }
    return winCondition;
}

function diagonalCheckDownRight(playerCoin, column, row){
    var coinCount=null;
    var winCondition=false;
    row=row+5;
    column = column-5;
    while(row>=0){
        if(row<=5 && column>=0 && column<=6){
            if(masterArray[column][row]===playerCoin){
                coinCount++;
                if(count===4){
                    wincondition=true;
                    return winCondition;
                }
            } else{
                count=0;
            }
        }
        column++;
        row --;
    }
    return winCondition;
}


// Modal Box

var modal = $('#myModal');
var btn = $("#openModal")


// Function to check horizontal win condition. Player to test and row the coin as added to are parameters.
function horizontalCheck(player, row){
    var count = 0;
    var winCondition = false;
    for (var col = 0; i < masterArray.length; col++){
        if(player === masterArray[col][row]){
            count++;
            if(count === 4){
                winCondition = true;
                return winCondition;
            } else {
                count = 0;
            }
        }
    }
    return winCondition;
}