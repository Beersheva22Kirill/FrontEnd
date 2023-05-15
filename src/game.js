//configuration
const nMoves = 3;

//elements
const inputElement = document.getElementById('input-id');
const goButtonElement = document.getElementById('go-id');
const squareElement = document.getElementById('square-id');
const playAgainButtonElement = document.getElementById('play-again-id');
const resultMessage = document.getElementById('result_id');

// global variables
let count = 1;

//functions
function game(){
    const color = inputElement.value;
    if (color == squareElement.style.backgroundColor){
        alert('This color was in the previous move')
    } else{
        squareElement.style.backgroundColor = color;
        ++count;
        if (count > nMoves) {
            finishGame();
        }
    }
    inputElement.value = '';
}

function startGame(){
    count = 1;
    goButtonElement.disabled = false; 
    inputElement.readOnly = false; 
    squareElement.style.backgroundColor = 'white';
    resultMessage.innerHTML = '';
    playAgainButtonElement.hidden = true;
}

function finishGame(){
    goButtonElement.disabled = true;
    inputElement.readOnly = true; 
    playAgainButtonElement.hidden = false;
    resultMessage.innerHTML = 'Congratulation game is over'

}

//Actions
goButtonElement.addEventListener('click',game);
playAgainButtonElement.addEventListener('click',startGame);
startGame();
