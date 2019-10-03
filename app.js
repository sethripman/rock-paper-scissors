import { getRandomThrow } from './get-random-throw.js';
import { checkResult } from './check-result.js';

// initialize DOM elements and fetch
const playButton = document.getElementById('my-button');
const recordDiv = document.getElementById('win-record');
const firstGameDiv = document.getElementById('first-game');
const winSpan = document.getElementById('wins');
const lossSpan = document.getElementById('losses');
const drawSpan = document.getElementById('draws');

/*
const myImage = document.getElementById('my-throw');
const theirImage = document.getElementById('their-throw');
const resultImage = document.getElementById('result-image');
*/

let winCount = 0;
let lossCount = 0;
let drawCount = 0;

// Game logic for each play
const startGame = () => {
    const selectedRadioButton = document.querySelector('input:checked');
    const userSelectedMove = selectedRadioButton.value;
    const compThrow = getRandomThrow();
    const gameOutcome = checkResult(userSelectedMove, compThrow);
    firstMoveDisplay();

    // switch statement for incrementing game record
    switch (gameOutcome) {
        case 'win':
            winCount++;
            break;
        case 'lose':
            lossCount++;
            break;
        case 'draw':
            drawCount++;
            break;
    }

    // update displays
    updateSpans();

    // console logging outcome
    console.log(gameOutcome);
    console.log('You played ' + userSelectedMove);
    console.log('Opponent played ' + compThrow);
};


// Update win-loss-draw record display
const updateSpans = () => {
    winSpan.textContent = winCount;
    lossSpan.textContent = lossCount;
    drawSpan.textContent = drawCount;
};

// Update mythrow image display
const updateMyThrowImage = (userSelectedMove) => {
    switch (userSelectedMove) {
        case 'rock':
            
            break;
        case 'paper':
            break;
        case 'scissors':
            break;
    }
};

const firstMoveDisplay = () => {
    recordDiv.classList.remove('hidden');
    firstGameDiv.classList.remove('hidden');
};

// Event handler for play button
playButton.addEventListener('click', startGame);