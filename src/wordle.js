//configuration
const words = ['check']//,'apple','check','seven','paint'];
const nMoves = 6;

//elements
const inputElement = document.getElementById('input-id');
const checkButtonElement = document.getElementById('check-id');
const counterElement = document.getElementById('counter-id');
const arrayElement = [];
for (let i = 0; i < 5; i++) {
    arrayElement[i] = document.getElementById('square-id-' + i);   
}

const playAgainButtonElement = document.getElementById('play-again-id');
const resultMessage = document.getElementById('result_id');

// global variables
let count = 0;
let word = '';
countLetters = new Map();
let helper = [0,0,0,0,0];
win = false;

//functions

function game(){
    setMapLetters();
    clearBlocks();
    const word_user = inputElement.value;
    if (word_user.length != word.length) {
        alert(`more than ${word.length} letters in word "${word_user}"`)
        inputElement.value = '';
        
        } else if (word_user != word){
            setColorLetters(word_user);
            inputElement.value = '';
            ++count
            if (count == nMoves) {
            finishGame();
            }
        } else {
            win = true;
            setColorLetters(word_user);
            inputElement.value = '';
            finishGame();
    }
    counterElement.innerHTML = `number of attempts ${nMoves - count} `
}

function setColorLetters(word_user) {
    for (let index = 0; index < word.length; index++) {
        arrayElement[index].innerHTML = word_user[index];
        if (word_user[index] == word[index]) {
            arrayElement[index].style.backgroundColor = 'green';
            helper[index] = 1;
            minusLetter(word_user[index]);
        } else {
            arrayElement[index].style.backgroundColor = getColor(word_user[index]);
        }  
    }
}

function getColor(letter){
    let color = 'gray'
        let index = 0;
        while(index < word.length - 1 && color != 'yellow'){
            if (letter == word[index] && helper[index] == 0 && countLetters.get(letter) > 0) {
                color = 'yellow'
                minusLetter(word[index]);
            }  
            index++;
        }        
    return color;
}

function minusLetter(letter) {
    countLetters.set(letter, countLetters.get(letter) - 1);
}

function clearBlocks() {

    for (let index = 0; index < word.length; index++) {
        arrayElement[index].style.backgroundColor = 'white';
        arrayElement[index].innerHTML = '';     
    }
}

function startGame(){
    win = false;
    word = words[getRandomIntNumber(0,words.length)]
    setMapLetters();
    count = 0;
    counterElement.innerHTML = `number of attempts ${nMoves} `
    checkButtonElement.disabled = false; 
    inputElement.readOnly = false; 

    clearBlocks()

    resultMessage.innerHTML = '';
    playAgainButtonElement.hidden = true;
}

function setMapLetters() {
    helper = [0,0,0,0,0];
    for (let index = 0; index < word.length; index++) {
        if (!countLetters.get(word[index])) {
            let counter = 0;
            for (let index2 = 0; index2 < word.length; index2++) {
                if (word[index2] == word[index]) {
                    countLetters.set(word[index], ++counter);
                }
            }
        }
    }
}

function finishGame(){
    checkButtonElement.disabled = true;
    inputElement.readOnly = true; 
    playAgainButtonElement.hidden = false;
    resultMessage.innerHTML = win ? 'Congratulation game is over. You win!!!!': `You lose. Word is "${word}"`       
}

checkButtonElement.addEventListener('click',game);
playAgainButtonElement.addEventListener('click',startGame);
startGame();

function getRandomIntNumber(min, max){
 
    return min < max ? Math.trunc(min + Math.random() * (max - min)) : NaN;
}

