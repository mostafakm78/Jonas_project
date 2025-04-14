'use strict';

const check = document.querySelector('.check');
const again = document.querySelector('.again');

let score = 100;
let highScore = 0;

// shortcut functions
const displayMessage = (message) => {
  document.querySelector('.message').textContent = message;
};
const displayNumber = (number) => {
  document.querySelector('.number').textContent = number;
};

// create random secret number
let sercretNumber = Math.trunc(Math.random() * 20) + 1;

//event on check button
check.addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  //when guess in no input
  if (!guess) {
    displayMessage('🙄 Enter a Number ');

    // when guess is correct
  } else if (guess === sercretNumber) {
    displayMessage('🎊 Correct Number !');
    displayNumber(sercretNumber);

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    //when guess is wrong
  } else if (guess !== sercretNumber) {
    if (score >= 10) {
      displayMessage(guess > sercretNumber ? '😒 Too High !' : '🤕 Too Low !');
      score = score - 10;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('🥲 You lost the game !');
      document.querySelector('body').style.backgroundColor = '#E52020';
    }
  }
});

// create again button game
again.addEventListener('click', () => {
  score = 100;
  sercretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  displayNumber('?');
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
