'use strict';

//Selecting elements
const rollDice = document.querySelector('.btn--roll');
const newGame = document.querySelector('.btn--new');
const hold = document.querySelector('.btn--hold');
const score0 = document.querySelector('#score--0');
const score1 = document.querySelector('#score--1');
const current0 = document.querySelector('#current--0');
const current1 = document.querySelector('#current--1');
const image = document.querySelector('.dice');

//Starting conditions
const playerScore0 = () => (score0.textContent = 0);
const playerScore1 = () => (score1.textContent = 0);
playerScore0();
playerScore1();
let isPlayer1 = false;
let actualPlayer;
let randomNumber;
let currentNumber = 0;
let scoreNumber1 = 0;
let scoreNumber0 = 0;
let score = 0;

//Rolling dice functionality
rollDice.addEventListener('click', function () {
  //Generating a random dice roll
  randomNumber = Math.ceil(Math.random() * 6);
  actualPlayer = isPlayer1 ? 1 : 0;

  if (scoreNumber1 < 99 && scoreNumber0 < 99) {
    if (randomNumber === 1) {
      document.querySelector(`#current--${actualPlayer}`).textContent = 0;
      currentNumber = 0;
      isPlayer1 = !isPlayer1;
    } else {
      document.querySelector(`#current--${actualPlayer}`).textContent =
        currentNumber += randomNumber;
    }
    image.src = `dice-${randomNumber}.png`;
  } else {
    if (scoreNumber0 >= 100) {
      alert('Player 1 has won!');
    } else if (scoreNumber1 >= 100) {
      alert('Player 2 has won!');
    }
  }
});

const startNewGame = () => {
  playerScore0();
  playerScore1();
  playerCurrent0();
  playerCurrent1();
};

newGame.addEventListener('click', startNewGame);

hold.addEventListener('click', function () {
  score += currentNumber;
  actualPlayer ? (scoreNumber1 += score) : (scoreNumber0 += score);
  console.log(scoreNumber1, scoreNumber0);
  document.querySelector(`#score--${actualPlayer}`).textContent =
    Number(document.querySelector(`#score--${actualPlayer}`).textContent) +
    score;
  isPlayer1 = !isPlayer1;
  document.querySelector(`#current--${actualPlayer}`).textContent = 0;
  currentNumber = 0;
  score = 0;

  if (scoreNumber0 >= 100) {
    alert('Player 1 has won!');
  } else if (scoreNumber1 >= 100) {
    alert('Player 2 has won!');
  }
});

let removeClass = false;

$('.btn--new').click(function () {
  if (!removeClass) {
    $(this).addClass('to-top');
    removeClass = true;
  } else {
    removeClassFuntion();
    removeClass = false;
  }
});

$('.btn--roll').click(function () {
  if (!removeClass) {
    $(this).addClass('to-top');
    removeClass = true;
  } else {
    removeClassFuntion();
    removeClass = false;
  }
});
$('.btn--hold').click(function () {
  if (!removeClass) {
    $(this).addClass('to-top');
    removeClass = true;
  } else {
    removeClassFuntion();
    removeClass = false;
  }
});

function removeClassFuntion() {
  $('.btn--new').removeClass('to-top');
  $('.btn--roll').removeClass('to-top');
  $('.btn--hold').removeClass('to-top');
}
