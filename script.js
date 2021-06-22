'use strict';

//Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
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
const playerCurrent0 = () => (current0.textContent = 0);
const playerCurrent1 = () => (current1.textContent = 0);
playerScore0();
playerScore1();
let isPlayer1 = false;
let actualPlayer;
let randomNumber;
let currentNumber = 0;
let scoreArray = [0, 0];

//Rolling dice functionality
rollDice.addEventListener('click', function () {
  //Generating a random dice roll
  randomNumber = Math.ceil(Math.random() * 6);
  actualPlayer = isPlayer1 ? 1 : 0;

  if (scoreArray[0] < 99 && scoreArray[1] < 99) {
    if (randomNumber === 1) {
      document.querySelector(`#current--${actualPlayer}`).textContent = 0;
      currentNumber = 0;
      isPlayer1 = !isPlayer1;
      player0El.classList.toggle('player--active'); //It'll add a class if it is not there and remove it if it is
      player1El.classList.toggle('player--active');
    } else {
      document.querySelector(`#current--${actualPlayer}`).textContent =
        currentNumber += randomNumber;
    }
    image.src = `dice-${randomNumber}.png`;
  } else {
    if (scoreArray[0] >= 100) {
      alert(`Player 1 has won!`);
    } else if (scoreArray[1] > 100) {
      alert(`Player 2 has won!`);
    }
  }
});

const startNewGame = () => {
  playerScore0();
  playerScore1();
  playerCurrent0();
  playerCurrent1();
  scoreArray = [0, 0];
};

newGame.addEventListener('click', startNewGame);

hold.addEventListener('click', function () {
  //Adding current number of players to active player's score
  scoreArray[actualPlayer] += currentNumber;
  document.querySelector(`#score--${actualPlayer}`).textContent =
    scoreArray[actualPlayer];

  isPlayer1 = !isPlayer1;
  document.querySelector(`#current--${actualPlayer}`).textContent = 0;

  if (currentNumber !== 0) {
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  }
  currentNumber = 0;

  if (scoreArray[actualPlayer] >= 100) {
    alert(`Player ${actualPlayer + 1} has won!`);
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
