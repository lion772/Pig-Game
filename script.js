'use strict';

const currentLabel = document.querySelector('.current-label');
const rollDice = document.querySelector('.btn--roll');
const newGame = document.querySelector('.btn--new');
const hold = document.querySelector('.btn--hold');
const score0 = document.querySelector('#score--0');
const score1 = document.querySelector('#score--1');
const current0 = document.querySelector('#current--0');
const current1 = document.querySelector('#current--1');
const image = document.querySelector('.dice');

const playerCurrent0 = () => (current0.textContent = 0);
const playerCurrent1 = () => (current1.textContent = 0);
const playerScore0 = () => (score0.textContent = 0);
const playerScore1 = () => (score1.textContent = 0);
playerScore0();
playerScore1();
let isPlayer1 = false;
let randomNumber;

const rollDiceNow = function () {
  randomNumber = Math.ceil(Math.random() * 6);
  let currentNumber1 = Number(current1.textContent);
  let currentNumber0 = Number(current0.textContent);
  let scoreNumber1 = Number(score1.textContent);
  let scoreNumber0 = Number(score0.textContent);

  if (scoreNumber1 < 99 && scoreNumber0 < 99) {
    if (isPlayer1) {
      if (randomNumber === 1) {
        playerCurrent1();
        isPlayer1 = false;
      } else if (randomNumber) {
        current1.textContent = currentNumber1 + randomNumber;
      }
    } else {
      if (randomNumber === 1) {
        playerCurrent0();
        isPlayer1 = true;
      } else if (randomNumber) {
        current0.textContent = currentNumber0 + randomNumber;
      }
    }
  } else {
    if (scoreNumber0 >= 100) {
      alert('Player 1 has won!');
    } else if (scoreNumber1 >= 100) {
      alert('Player 2 has won!');
    }
  }
  image.src = `dice-${randomNumber}.png`;
};

rollDice.addEventListener('click', rollDiceNow);

const startNewGame = () => {
  playerScore0();
  playerScore1();
  playerCurrent0();
  playerCurrent1();
};

newGame.addEventListener('click', startNewGame);

const holdScore = () => {
  let currentInNumber0 = Number(current0.textContent);
  let currentInNumber1 = Number(current1.textContent);
  let scoreNumber1 = Number(score1.textContent);
  let scoreNumber0 = Number(score0.textContent);

  if (currentInNumber0 > 0 || currentInNumber1 > 0) {
    if (isPlayer1) {
      score1.textContent = Number(score1.textContent) + currentInNumber1;
      isPlayer1 = false;
      current1.textContent = 0;
    } else {
      score0.textContent = Number(score0.textContent) + currentInNumber0;
      isPlayer1 = true;
      current0.textContent = 0;
    }
  }

  if (Number(score0.textContent) >= 100) {
    alert('Player 1 has won!');
  } else if (Number(score1.textContent) >= 100) {
    alert('Player 2 has won!');
  }
};

hold.addEventListener('click', holdScore);
