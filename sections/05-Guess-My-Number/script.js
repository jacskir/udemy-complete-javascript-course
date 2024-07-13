'use strict';

let score = 20;
let highscore = 0;
let secretNumber = generateNumber();
let gamePaused = false;

const setMessage = (message) =>
  (document.querySelector('.message').textContent = message);
const setNumber = (number) =>
  (document.querySelector('.number').textContent = number);
const setScore = (score) =>
  (document.querySelector('.score').textContent = score);
const setHighscore = (highscore) =>
  (document.querySelector('.highscore').textContent = highscore);
const setBackground = (backgroundColor) =>
  (document.body.style.backgroundColor = backgroundColor);
const setNumberWidth = (width) =>
  (document.querySelector('.number').style.width = width);
const setGuess = (guess) => (document.querySelector('.guess').value = guess);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (gamePaused) {
    setMessage(`Click the 'Again!' button to try again!`);
  } else if (guess < 1 || guess > 20) {
    setMessage('Please enter number between 1 and 20.');
  } else if (guess === secretNumber) {
    win();
  } else if (guess !== secretNumber) {
    score -= 1;
    setScore(String(score));
    setMessage(`Guessed too ${guess < secretNumber ? 'low' : 'high'}!`);
    if (score < 1) lose();
  }
});

document.querySelector('.again').addEventListener('click', function () {
  gamePaused = false;
  secretNumber = generateNumber();
  score = 20;
  setScore(String(score));
  setNumber('?');
  setMessage('Start guessing...');
  setBackground('#222');
  setNumberWidth('15rem');
  setGuess('');
});

function win() {
  if (score > highscore) {
    highscore = score;
    setHighscore(String(highscore));
  }
  gamePaused = true;
  setNumber(String(secretNumber));
  setNumberWidth('30rem');
  setMessage('You guessed it right!');
  setBackground('#60b347');
}

function lose() {
  gamePaused = true;
  setNumber(String(secretNumber));
  setNumberWidth('30rem');
  setMessage('You lost!');
  setBackground('#B34747');
}

function generateNumber() {
  return Math.floor(Math.random() * 20) + 1;
}
