'use strict';
//select element using class and get its textContent

// console.log(document.querySelector('.info').textContent);

/*
//changing the document content
document.querySelector('.info').textContent = `Correct Number`;

//reading text content
console.log(document.querySelector('.info').textContent);

const number = document.querySelector('.sc');
const score = document.querySelector('.disNum');

number.textContent = 13;
score.textContent = 20;

//ent-num
console.log(document.querySelector('.ent-num').value);
document.querySelector('.ent-num').value = 23;
*/

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.ent-btn').addEventListener('click', () => {
  const guess = Number(document.querySelector('.ent-num').value);
  console.log(guess, typeof guess);

  //when there is no input
  if (!guess) {
    document.querySelector('.info').textContent = '⛔ No Number';
  } else if (guess === secretNumber) {
    //when player wins
    document.querySelector('.disNum').textContent = secretNumber;
    document.querySelector('.info').textContent = 'Correct Number';
    document.querySelector('body').style.backgroundColor = `#60b347`;
    document.querySelector('.disNum').style.width = '30rem';
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.info').textContent = 'Too high';
      score--;
      document.querySelector('.sc').textContent = score;
    } else {
      document.querySelector('.info').textContent = '⛔ You last the game';
      document.querySelector('.sc').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.info').textContent = 'Too low';
      score--;
      document.querySelector('.sc').textContent = score;
    } else {
      document.querySelector('.info').textContent = '⛔ You last the game';
      document.querySelector('.sc').textContent = 0;
    }
  }
});

// .play-again
document.querySelector('.play-again').addEventListener('click', () => {
  document.querySelector('.sc').textContent = 20;
  document.querySelector('.ent-num').value = '';
  document.querySelector('.disNum').textContent = '?';
  document.querySelector('.info').textContent = 'Start Guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.disNum').style.width = '15rem';
});
