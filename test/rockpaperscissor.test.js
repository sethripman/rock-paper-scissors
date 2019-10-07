// IMPORT MODULES under test here:
// import example from '../src/example.js';
import { checkResult } from '../check-result.js';
import gameOver from '../game-over.js';

const test = QUnit.test;

test('should return nothing you are flat broke string with imported variables', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const bank = 0;
    const bankSpan = '';
    //Act 
    // Call the function you're testing and set the result to a const
    const result = gameOver(bank, bankSpan);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, 'nothing! You are flat broke and the game is over.');
});

test('should return win if paper played against rock', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const playerMove = 'paper';
    const compMove = 'rock';
    //Act 
    // Call the function you're testing and set the result to a const
    const result = checkResult(playerMove, compMove);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, 'win');
});

test('should return win if rock played against scissors', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const playerMove = 'rock';
    const compMove = 'scissors';
    //Act 
    // Call the function you're testing and set the result to a const
    const result = checkResult(playerMove, compMove);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, 'win');
});

test('should return win if scissors played against paper', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const playerMove = 'scissors';
    const compMove = 'paper';
    //Act 
    // Call the function you're testing and set the result to a const
    const result = checkResult(playerMove, compMove);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, 'win');
});

test('should return lose if paper played against scissors', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const playerMove = 'paper';
    const compMove = 'scissors';
    //Act 
    // Call the function you're testing and set the result to a const
    const result = checkResult(playerMove, compMove);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, 'lose');
});

test('should return lose if scissors played against rock', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const playerMove = 'scissors';
    const compMove = 'rock';
    //Act 
    // Call the function you're testing and set the result to a const
    const result = checkResult(playerMove, compMove);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, 'lose');
});

test('should return lose if rock played against paper', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const playerMove = 'rock';
    const compMove = 'paper';
    //Act 
    // Call the function you're testing and set the result to a const
    const result = checkResult(playerMove, compMove);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, 'lose');
});

test('should return draw if paper played against paper', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const playerMove = 'paper';
    const compMove = 'paper';
    //Act 
    // Call the function you're testing and set the result to a const
    const result = checkResult(playerMove, compMove);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, 'draw');
});

test('should return draw if rock played against rock', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const playerMove = 'rock';
    const compMove = 'rock';
    //Act 
    // Call the function you're testing and set the result to a const
    const result = checkResult(playerMove, compMove);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, 'draw');
});

test('should return draw if scissors played against scissors', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const playerMove = 'scissors';
    const compMove = 'scissors';
    //Act 
    // Call the function you're testing and set the result to a const
    const result = checkResult(playerMove, compMove);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, 'draw');
});