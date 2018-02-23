$(document).ready(initializeApp);

//Set up our global variables. Arrays will be used to keep track of game board logic
var array6 = [null, null, null, null, null, null];
var array5 = [null, null, null, null, null, null];
var array4 = [null, null, null, null, null, null];
var array3 = [null, null, null, null, null, null];
var array2 = [null, null, null, null, null, null];
var array1 = [null, null, null, null, null, null];
var array0 = [null, null, null, null, null, null];
var masterArray = [array0, array1, array2, array3, array4, array5, array6];
var tokenChoices = ['url(images/fireball.gif)','url(images/coin-2.gif)', 'url(images/coin-3.gif)', 'url(images/coin-4.gif)'];


function initializeApp() {
    attachEventHandlers();
}

function attachEventHandlers(){
    $('.col').on('click', columnClicked);
    $('.start_area').on('click', closeModal);
    $('.tokens').click(selectToken);
    $('.reset-button').on('click', clearEntireBoard);
}

//Function that checks for winner. Takes in parameters of player, row and column to check for all possible win conditions.
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

//Allows us to test if the game board is full by looping through our masterArray.
function isBoardFull(){
    for(var i = 0; i < masterArray.length; i++){
        for(var j = 0; j < masterArray[0].length; j++){
            if(masterArray[i][j] === null)
                return false;
        }
    }
    return true;
}

//This function creates functionality for the player selecting their token
function selectToken(){
    if(game.player1token === null) {
        var passSrc = $(this).find("img");
        $('#p1token img').attr("src", passSrc[0].src).addClass('swashIn');
        if (this.id === 'one') {
            game.player1token = tokenChoices[0];
            game.player1tokenClass = 'token1';
        }
        else if (this.id === 'two'){
            game.player1token = tokenChoices[1];
            game.player1tokenClass = 'token2';
        }
        else if(this.id === 'three'){
            game.player1token = tokenChoices[2];
            game.player1tokenClass = 'token3';
        }else {
            game.player1token = tokenChoices[3];
            game.player1tokenClass = 'token4';
        }
        $(this).addClass('noTouch');
        $('.player_text_area > h1').text("P2 Choose Your Token");
    }
    else if (game.player2token === null){
        var passSrc = $(this).find("img");
        $('#p2token img').attr("src",passSrc[0].src).addClass('swashIn');
        if(this.id === 'one') {
            game.player2token = tokenChoices[0];
            game.player2tokenClass = 'token1';
        }
        else if(this.id === 'two') {
            game.player2token = tokenChoices[1];
            game.player2tokenClass = 'token2';
        }
        else if(this.id === 'three') {
            game.player2token = tokenChoices[2];
            game.player2tokenClass = 'token3';
        } else {
            game.player2token = tokenChoices[3];
            game.player2tokenClass = 'token4';
        }
        $('.player_text_area > h1').text("Press Start Below");
        assignPlayerTokens();
        $('.start_area').removeClass('noTouch');
    }
}

//This function is designed to work with the selectToken function. It updates the game board display on what token was selected.
function assignPlayerTokens(){
    var temp =  $('#p1token img');
    $('#displayOne img').attr("src", temp[0].src).addClass('swashIn');
    temp = $('#p2token img');
    $('#displayTwo img').attr("src", temp[0].src).addClass('swashIn');
}

//This function calls clearArrayBoard and clearDomBoard to clear everything
function clearEntireBoard(){
    clearArrayBoard();
    clearDomBoard();
    $('.win-message-container').addClass('hidden');
    $('#myModal').removeClass('hidden');
    $('#p1token img, #p2token img, .info-tokens img').attr('src', 'images/token-back.jpg');
    $('.game_board, .tokens').removeClass('noTouch');    
    $('.game_board div').removeClass('last-token');
    $('.start_area').addClass('noTouch');
}

//This function will clear the masterArray and reset everything to null.
function clearArrayBoard(){
    for(var i = 0; i < masterArray.length; i++){
        for(var j = 0; j < masterArray[0].length; j++){
            masterArray[i][j] = null;
        }
    }
}

//This function will clear the classes used to visualize the game board on the dom effectively reseting the game board visually.
function clearDomBoard(){
    console.log("The clear dom function got called.");
    $('.player1').removeClass('player1 token1 token2 token3 token4');
    $('.player2').removeClass('player2 token1 token2 token3 token4');
}

//This function represents the click functionality of playing the game. Each time it is called the player turn is toggled and the board and masterArray are updated with the
//correct play move.
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
        if (rows[i].attr('class')!=='row_'+i+' player1 ' +  game.player1tokenClass && rows[i].attr('class')!=='row_'+i+' player2 ' + game.player2tokenClass){
            if(game.playerTurn === 'player1'){
                $('#displayOne img').addClass('holeOut');                
            } else {
                $('#displayTwo img').addClass('holeOut');
            }
            debugger;
            x=i;
                $('.cover_bg').addClass('noTouch');
            setTimeout(function(){
            rows[x].addClass(game.playerTurn + ' last-token');
            if(game.playerTurn === 'player1') {
                rows[x].addClass(game.player1tokenClass);
                $('#displayOne img').removeClass('holeOut');   
            }else {
                rows[x].addClass(game.player2tokenClass);
                $('#displayTwo img').removeClass('holeOut');  
            }
            $('.cover_bg').removeClass('noTouch');
            }, 1000);
            coinPlaced=true;
            masterArray[columnNumber][i]=game.playerTurn;
            if(checkForWinner(game.playerTurn, i, columnNumber)){
                setTimeout(function(){
                    displayWinMessage(game.playerTurn, i, columnNumber)
                }, 500);
                console.log("Somebody has won the game.")
            } else {
                if(isBoardFull()){
                    console.log("The board is full.")
                }
            }

        }
    }
}

//This is our object for the game. It is a helper object that is used in other function logic.
var game = {
    playerTurn:'player2',
    player1token: null,
    player1tokenClass: null,
    player2token: null,
    player2tokenClass: null
};

//This function checks for the vertical win condition
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

//This function checks the diagonal win condition similar to a forwardslash
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

//This function checks the diagonal win condition similar to a backslash
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

// Function to close modal after making your selection.
function closeModal(){
    console.log('button clicked');
    var span = $('.start_game');
    var modal = $('#myModal');

    if($(span.clicked)){
        modal.addClass('hidden');
    }
}

function displayWinMessage(){
    if(isBoardFull()){
        $('.win-message-container').removeClass('hidden');
        $('.game_board').addClass('noTouch');
        $('#win-message').text("You're both losers!");
        game = {
            playerTurn:'player1',
            player1token: null,
            player1tokenClass: null,
            player2token: null,
            player2tokenClass: null
        };
    } else if(checkForWinner()){
        $('.win-message-container').removeClass('hidden');
        $('.game_board').addClass('noTouch');
        $('#win-message').text(game.playerTurn + " has won!");
        game = {
            playerTurn:'player1',
            player1token: null,
            player1tokenClass: null,
            player2token: null,
            player2tokenClass: null
        };
    }
}

