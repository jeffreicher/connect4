$(document).ready(initializeApp);

var array6 = [null, null, null, null, null, null];
var array5 = [null, null, null, null, null, null];
var array4 = [null, null, null, null, null, null];
var array3 = [null, null, null, null, null, null];
var array2 = [null, null, null, null, null, null];
var array1 = [null, null, null, null, null, null];
var array0 = [null, null, null, null, null, null];

var masterArray = [array0, array1, array2, array3, array4, array5, array6];

function initializeApp() {
    attachEventHandlers();
}

function attachEventHandlers(){
    $('.col').on('click', columnClicked);
    $('#myBtn').on('click', function(){
        $('#myModal').addClass('hidden');z
    });
    $('.tokens').click(selectToken);
}

function checkForWinner(player, row, column){
    if(horizontalCheck(player, row))
        return true;
    else if(verticalWinCondition(player, column))
        return true;
    else if(diagonalCheckDownLeft(player, row, column))
        return true;
    else if(diagonalCheckDownRight(player, row, column))
        return true;
    else
        return false;
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

function selectToken(){
    if(game.player1token === null){
        var passSrc = $(this).find("img");
        $('#p1token img').attr("src",passSrc[0].src);
        if(this.id === 'one')
            game.player1token = tokenChoices[0];
        else if(this.id === 'two')
            game.player1token = tokenChoices[1];
        else if(this.id === 'three')
            game.player1token = tokenChoices[2];
        else
            game.player1token = tokenChoices[3];
        $(this).addClass('noTouch');
        $('.player_text_area > h1').text("P2 Choose Your Token");
    }
    else if (game.player2token === null){
        var passSrc = $(this).find("img");
        $('#p2token img').attr("src",passSrc[0].src);
        if(this.id === 'one')
            game.player2token = tokenChoices[0];
        else if(this.id === 'two')
            game.player2token = tokenChoices[1];
        else if(this.id === 'three')
            game.player2token = tokenChoices[2];
        else
            game.player2token = tokenChoices[3];
        $('.player_text_area > h1').text("Press Start Below");
        assignPlayerTokens();
    }
}

function assignPlayerTokens(){
    var temp =  $('#p1token img');
    $('#displayOne img').attr("src", temp[0].src);
    temp = $('#p2token img');
    $('#displayTwo img').attr("src", temp[0].src);
}


function clearEntireBoard(){
    clearArrayBoard();
    clearDomBoard();
}

function clearArrayBoard(){
    for(var i = 0; i < masterArray.length; i++){
        for(var j = 0; j < masterArray[0].length; j++){
            masterArray[i][j] = null;
        }
    }
}

function clearDomBoard(){
    console.log("The clear dom function got called.");
    $('.player1').removeClass('player1');
    $('.player2').removeClass('player2');
}


function columnClicked(){
    $('div').removeClass('last-token');
    console.log('column clicked');
    game.playerTurn = (game.playerTurn === "player1") ? "player2" : "player1";
    var column = $(this);
    var columnNumber = parseInt($(this).attr('id'));
    var rows = [
        column.children('.row_0'),
        column.children('.row_1'),
        column.children('.row_2'),
        column.children('.row_3'),
        column.children('.row_4'),
        column.children('.row_5')
    ];
    var coinPlaced=false;
    for(var i=0; coinPlaced===false && i<rows.length;i++){
        if (rows[i].attr('class')!=='row_'+i+' player1' && rows[i].attr('class')!=='row_'+i+' player2'){
            rows[i].addClass(game.playerTurn + ' last-token');
            coinPlaced=true;
            masterArray[columnNumber][i]=game.playerTurn;
            if(checkForWinner(game.playerTurn, i, columnNumber)){
                console.log("Somebody has won the game.")
            } else {
                if(isBoardFull()){
                    console.log("The board is full.")
                }
            }

        }
    }
}

var game = {
    playerTurn:'player2',
    player1token: null,
    player2token: null
};

function verticalWinCondition(player, column){
    var coinCount=null;
    var winCondition=false;
    for (var i =0; i < masterArray[column].length; i++){
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
    var count=null;
    var winCondition=false;
    row=row+5;
    column = column-5;
    while(row>=0){
        if(row<=5 && column>=0 && column<=6){
            if(masterArray[column][row]===player){
                count++;
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

// Function to check horizontal win condition. Player to test and row the coin as added to are parameters.
function horizontalCheck(player, row){
    var count = 0;
    var winCondition = false;
    for (var col = 0; col < masterArray.length; col++){
        if(player === masterArray[col][row]){
            count++;
            if(count === 4){
                winCondition = true;
                return winCondition;
            }
        }else {
            count = 0;
        }
    }
    return winCondition;
}



// Modal box
var modal = document.getElementById('myModal');
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("start_game")[0];
var tokenChoices = ['url(images/coin-1.gif)','url(images/coin-2.gif)', 'url(images/coin-3.gif)', 'url(images/coin-4.gif)'];

btn.onclick = function() {
    modal.style.display = "block";
    console.log('button clicked')
};

span.onclick = function() {
    modal.style.display = "none";
};

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
