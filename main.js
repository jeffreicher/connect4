
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
}