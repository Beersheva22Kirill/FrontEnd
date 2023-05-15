//configuration
const words = [[' fruit of iPhone' ,'apple'],
['7 to word','seven'],
['Time on the way','clock'],
['Create engaging lesson plans','teacher'],
['You can go to a bar with him','friend'],
['Dress when you go out','clothes']];
const BLACK = 'black';
const attemptLet = 50;

//elements
const inputElementLet = document.getElementById('input-let-id');
const inputElementWord = document.getElementById('input-word-id');
const checkLetElementLet = document.getElementById('check-let-id');
const checkWordElementLet = document.getElementById('check-word-id');
const readyWordElementLet = document.getElementById('ready-word-id');
const againElement = document.getElementById('play-again-id');
const questionElement = document.getElementById('question-id'); 
const wordElement = document.getElementById('word-id');
const resultMessage = document.getElementById('result_id');

//global variable
let question = [];
let lettersElement = [];
let countAttLet;
let win = false;

//function
function startGame(){
    win = false;
    inputElementLet.value = '';
    inputElementWord.value = '';
    inputElementLet.readOnly = false;
    checkLetElementLet.disabled = false;
    inputElementWord.readOnly = true;
    checkWordElementLet.disabled = true;
    question = words[getRandomIntNumber(0,words.length - 1)];
    questionElement.innerHTML = question[0];
    let divLetters = '';
    for (let index = 0; index < question[1].length; index++) {
        divLetters += `<div class = "square black">${question[1][index]}</div>`;
    }
    wordElement.innerHTML = divLetters;
    lettersElement = document.querySelectorAll('.square');
    countAttLet = Math.trunc(question[1].length * (attemptLet/100)); 
    resultMessage.innerHTML = '';
    againElement.hidden = true;
}

function checkLet(){
    if (inputElementLet.value.length == 1) {
        countAttLet--;
        for (let index = 0; index < question[1].length; index++) {
            if (inputElementLet.value == question[1][index]) {
                lettersElement[index].classList.remove(BLACK)
            }    
        }
        inputElementLet.value = '';
        if (countAttLet == 0) {
            disableButtonLet();
        }
    } else {
        alert(`one letter!!!!`)
    }
    
}

function readyWord(){
    inputElementWord.readOnly = false;
    checkWordElementLet.disabled = false;
}

function checkWord(){
    for (let index = 0; index < question[1].length; index++) {
            lettersElement[index].classList.remove(BLACK)
    }
    if (inputElementWord.value == question[1]) {
        win = true;   
    }
    inputElementWord.value = '';
    finishGame();
}

function finishGame(){
    checkWordElementLet.disabled = true;
    inputElementWord.readOnly = true; 
    againElement.hidden = false;
    resultMessage.innerHTML = win ? 'Congratulation game is over. You win!!!!': `You lose!!!!"` 
}

function disableButtonLet(){
    inputElementLet.readOnly = true;
    checkLetElementLet.disabled = true;
}

function getRandomIntNumber(min, max){

    return min < max ? Math.trunc(min + Math.random() * (max - min)) : NaN;
}

checkWordElementLet.addEventListener('click',checkWord);
checkLetElementLet.addEventListener('click',checkLet);
againElement.addEventListener('click',startGame);
readyWordElementLet.addEventListener('click',readyWord)
startGame()