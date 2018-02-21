function checkForWinner(player, row, column){
    if(horizontalCheck(player, row) === "true")
        console.log("You sir are a winner");
    else if(verticalWinCondition(player, column) === "true")
        console.log("You are a vertical winner");
    else if(diagonalCheckDownLeft(player, row, column)==="true")
        console.log("You are a forward slash winner");
    else(diagonalCheckDownRight(player, row, column) === "true")
        console.log("You sir are a back slash winner");
}

function isBoardFull(){
    for(var i = 0; i < masterArray.length; i++){
        for(var j = 0; j < masterArray[0].length; j++){
            if(masterArray[i][j] === null)
                return false;
        }
    }
    return true;
}

function createCoin(){
    var player='player1';
    $('<div>').addClass(player)
}
function columnClicked(){
    var column = $(this).attr('class')
}



function verticalWinCondition(player, column){
    var coinCount=null;
    var winCondition=false;
    for (var i =0; i<masterArray[column].length; i++){
        if(coinCount===4) {
            winCondition = true;
            return winCondition;
        } else if(masterArray[column][i]===player){
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

function diagonalCheckDownRight(player, row, column){
    var coinCount=null;
    var winCondition=false;
    row=row+5;
    column = column-5;
    while(row>=0){
        if(row<=5 && column>=0 && column<=6){
            if(masterArray[column][row]===player){
                coinCount++;
                if(count===4){
                    winCondition=true;
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

$(document).ready(initializeApp);

function initializeApp() {
    attachEventHandlers();
}

function attachEventHandlers(){
    $('.col').on('click', columnClicked);
}

function columnClicked(){
    console.log('column clicked');
}