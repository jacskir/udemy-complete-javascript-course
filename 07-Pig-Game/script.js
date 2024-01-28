"use strict";

const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const diceEl = document.querySelector(".dice");
const sectionEl = (turn) => document.querySelector(`.player--${turn}`);
const scoreEl = (turn) => document.querySelector(`#score--${turn}`);
const currentEl = (turn) => document.querySelector(`#current--${turn}`);

let scores, turn, currentScore, gamePaused;

const init = function () {
  scores = [0, 0];
  turn = 0;
  currentScore = 0;
  gamePaused = false;
  diceEl.style.display = "none";
  scoreEl(0).textContent = "0";
  scoreEl(1).textContent = "0";
  currentEl(0).textContent = "0";
  currentEl(1).textContent = "0";
  sectionEl(0).classList.add("player--active");
  sectionEl(0).classList.remove("player--winner");
  sectionEl(1).classList.remove("player--winner", "player--active");
};
init();

btnNew.addEventListener("click", init);

btnRoll.addEventListener("click", function () {
  if (gamePaused) return;

  const roll = Math.trunc(Math.random() * 6) + 1;
  diceEl.src = `/07-Pig-Game/images/dice-${roll}.png`;
  diceEl.style.display = "block";

  roll !== 1 ? addCurrentScore(roll) : switchTurn();
});

btnHold.addEventListener("click", function () {
  if (gamePaused) return;

  addScore(currentScore);

  if (scores[turn] >= 100) {
    sectionEl(turn).classList.add("player--winner");
    gamePaused = true;
  } else {
    switchTurn();
  }
});

function addScore(amount) {
  scores[turn] += amount;
  scoreEl(turn).textContent = String(scores[turn]);
}

function addCurrentScore(amount) {
  currentScore += amount;
  currentEl(turn).textContent = String(currentScore);
}

function switchTurn() {
  currentScore = 0;
  currentEl(turn).textContent = "0";
  sectionEl(turn).classList.toggle("player--active");
  turn = turn === 0 ? 1 : 0;
  sectionEl(turn).classList.toggle("player--active");
}
