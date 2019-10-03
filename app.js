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
    updateMyThrowImage(userSelectedMove);
    updatetheirThrowImage(compThrow);
    updateResultImage(gameOutcome);
    firstMoveDisplay();

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
            document.getElementById('my-throw').src = 'https://images.freeimages.com/images/large-previews/a62/ching-chong-cha-2-1440527.jpg';
            break;
        case 'paper':
            document.getElementById('my-throw').src = 'https://images.freeimages.com/images/large-previews/f1f/ching-chong-cha-3-1440520.jpg';
            break;
        case 'scissors':
            document.getElementById('my-throw').src = 'https://images.freeimages.com/images/large-previews/c09/ching-chong-cha-1-1440531.jpg';
            break;
    }
};

// Update theirthrow image display
const updatetheirThrowImage = (compThrow) => {
    switch (compThrow) {
        case 'rock':
            document.getElementById('their-throw').src = 'https://images.freeimages.com/images/large-previews/a62/ching-chong-cha-2-1440527.jpg';
            break;
        case 'paper':
            document.getElementById('their-throw').src = 'https://images.freeimages.com/images/large-previews/f1f/ching-chong-cha-3-1440520.jpg';
            break;
        case 'scissors':
            document.getElementById('their-throw').src = 'https://images.freeimages.com/images/large-previews/c09/ching-chong-cha-1-1440531.jpg';
            break;
    }
};

// Update theirthrow image display
const updateResultImage = (gameOutcome) => {
    switch (gameOutcome) {
        case 'win':
            document.getElementById('result-image').src = 'https://images.freeimages.com/images/large-previews/079/hands-thumbsup-1520319.jpg';
            break;
        case 'lose':
            document.getElementById('result-image').src = 'https://images.freeimages.com/images/large-previews/f65/hands-thumbsdown-1520327.jpg';
            break;
        case 'draw':
            document.getElementById('result-image').src = 'https://images.freeimages.com/images/large-previews/8b0/balance-1172800.jpg';
            break;
    }
};

const firstMoveDisplay = () => {
    recordDiv.classList.remove('hidden');
    firstGameDiv.classList.remove('hidden');
};

// Event handler for play button
playButton.addEventListener('click', startGame);