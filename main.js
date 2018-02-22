

var array6 = [null, null, null, null, null, null];
var array5 = [null, null, null, null, null, null];
var array4 = [null, null, null, null, null, null];
var array3 = [null, null, null, null, null, null];
var array2 = [null, null, null, null, null, null];
var array1 = [null, null, null, null, null, null];
var array0 = [null, null, null, null, null, null];


var masterArray = [array0, array1, array2, array3, array4, array5, array6];

function checkForWinner(player, row, column){
    if(horizontalCheck(player, row) === "true")
        console.log("You sir are a winner");
    else if(verticalWinCondition(player, column) === "true")
        console.log("You are a vertical winner");
    else if(diagonalCheckDownLeft(player, row, column)==="true")
        console.log("You are a forward slash winner");
    else if(diagonalCheckDownRight(player, row, column) === "true")
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




function columnClicked(){
    console.log('column clicked');
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
            rows[i].addClass('player1');
            coinPlaced=true;
            masterArray[columnNumber][i]='p1';
        }
    }
}

var settings = {
    'player1':'coin1'
};

settings.player1 = 'coin2';


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
    $('#myBtn').on('click', function(){
        $('#myModal').addClass('hidden');
    })
}

function columnClicked(){
    console.log('column clicked');
}

// Modal box



// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
    console.log('button clicked')
}


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


