'use strict';
/*const player0Elem = document.querySelector('.player--0');
const player1Elem = document.querySelector('.player--1');
const score0Elem = document.querySelector('#score--0');
const score1Elem = document.getElementById('score--1');
const current0Elem = document.querySelector('#current--0');
const current1Elem = document.getElementById('current--1');
const diceElem = document.querySelector('.dice');
const btnNew= document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold')

const PLAYER_1 = 0;
const PLAYER_2 = 1;
let currentPlayer = PLAYER_1;

const WIN_SCORE = 100;
let currentScore = 0;
let scores = [0,0];

let gameEnd = false;


function init() {
    scores = [0,0];
    currentScore = 0;
    currentPlayer = PLAYER_1;

    score0Elem.textContent = 0;
    score1Elem.textContent = 0;
    current0Elem.textContent = 0;
    current1Elem.textContent = 0;

    player0Elem.classList.remove('player--winner');
    player1Elem.classList.remove('player--winner');
    player0Elem.classList.add('player--active');
    player1Elem.classList.remove('player--active');
    diceElem.classList.add('hidden');
    gameEnd = false;
}

init();

function switchPlayer() {
    currentScore = 0;
    document.querySelector(`#current--${currentPlayer}`).textContent = 0;
    currentPlayer = currentPlayer === PLAYER_1 ? PLAYER_2 : PLAYER_1;
    player0Elem.classList.toggle('player--active');
    player1Elem.classList.toggle('player--active');
}

function setCurrentScore() {
    document.querySelector(`#current--${currentPlayer}`).textContent = currentScore;
}

function setPlayerScore() {
    scores[currentPlayer] += currentScore;
    document.querySelector(`#score--${currentPlayer}`).textContent = scores[currentPlayer];
}

function setWinner() {
    document
        .querySelector(`.player--${currentPlayer}`)
        .classList.add('player--winner');
    document
        .querySelector(`.player--${currentPlayer}`)
        .classList.remove('player--active');
    diceElem.classList.add('hidden');
    gameEnd = true;
}

btnRoll.addEventListener('click', function(e) {
    if (gameEnd) {
        return;
    }
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);
    
    diceElem.classList.remove('hidden');
    diceElem.src = `dice-${dice}.png`;

    if (dice !== 1) {
        currentScore += dice;
        setCurrentScore()
    } else {
        switchPlayer();
    }
    
});

btnHold.addEventListener('click', function() {
    if (gameEnd) {
        return;
    }
    setPlayerScore();
    if (scores[currentPlayer] >= WIN_SCORE) {
        setWinner();
    } else {
        switchPlayer();
    }
});

btnNew.addEventListener('click', init);*/
//Selecting elts
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const currentEl0 = document.getElementById('current--0');
const currentEl1 = document.getElementById('current--1');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//starting conditions
let scores, currentScore, activePlayer, playing;
const init = function () {
  score0El.textContent = 0;
  score1El.textContent = 0;
  currentEl0.textContent = 0;
  currentEl1.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--winner');

  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;
};
init();
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

//rolling dice functionality
btnRoll.addEventListener('click', function () {
  //1.generating a random number dice roll
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);
    //2. display the dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    //3.check for rolled 1:if true,switch to next player
    if (dice !== 1) {
      //add dice to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //switch to next player
      switchPlayer();
    }
  }
});
btnHold.addEventListener('click', function () {
  if (playing) {
    //1. add current score  to the active player´s score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    //2.check if players score is >= 100, finish the game
    if (scores[activePlayer] >= 10) {
      playing = false;
      diceEl.classList.add('hidden');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
    }
    // if not switch the player
  }
});
btnNew.addEventListener('click', init);
