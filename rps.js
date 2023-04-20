// GLOBALS
CHOICES = ['rock', 'paper', 'scissors'];
const NUMBER_OF_GAMES = 5;
let scorePlayer = 0;
let scoreComp = 0;
let gameCounter = 0;

// FUNCTIONS
function getComputerChoice() {
  return CHOICES[Math.floor(Math.random() * CHOICES.length)];
}

function roundResult(result, msg) {
  if (result == 'player') {
    scorePlayer++;
    playerScoreDisp.textContent = scorePlayer;
  } else if (result == 'computer') {
    scoreComp++;
    compScoreDisp.textContent = scoreComp;
  }
  gameCount.textContent = gameCounter;
}

function playRound(e) {
  let playerChoice = this.textContent;
  const compChoice = getComputerChoice();

  if (typeof playerChoice == 'string')
    playerChoice = playerChoice.toLowerCase();
  else {
    alert(
      'You have to input something to play the game.\nTry to be competent next time...'
    );
    roundResult('bad', 'Try Again');
  }

  gameCounter++;
  if (playerChoice == compChoice) {
    roundResult('draw', "It's a draw, you both chose " + playerChoice);
  } else if (playerChoice == 'rock') {
    if (compChoice == 'scissors')
      roundResult(
        'player',
        'You win, ' + playerChoice + ' beats ' + compChoice
      );
    else if (compChoice == 'paper')
      roundResult(
        'computer',
        'You lose ' + compChoice + ' beats ' + playerChoice
      );
  } else if (playerChoice == 'paper') {
    if (compChoice == 'rock')
      roundResult(
        'player',
        'You win, ' + playerChoice + ' beats ' + compChoice
      );
    else if (compChoice == 'scissors')
      roundResult(
        'computer',
        'You lose ' + compChoice + ' beats ' + playerChoice
      );
  } else if (playerChoice == 'scissors') {
    if (compChoice == 'paper')
      roundResult(
        'player',
        'You win, ' + playerChoice + ' beats ' + compChoice
      );
    else if (compChoice == 'rock')
      roundResult(
        'computer',
        'You lose ' + compChoice + ' beats ' + playerChoice
      );
  } else roundResult('bad', 'You really goofed something up...');
}

// MAIN
const choiceButtons = document.querySelectorAll('.choice');
choiceButtons.forEach((choice) => choice.addEventListener('click', playRound));
const gameCount = document.querySelector('.game-count');
const playerScoreDisp = document.querySelector('.player-score');
const compScoreDisp = document.querySelector('.comp-score');
playerScoreDisp.textContent = scorePlayer;
compScoreDisp.textContent = scoreComp;
gameCount.textContent = gameCounter;

// if (scoreComp > scorePlayer) {
//   console.log('You lost, as expected...');
// } else if (scorePlayer > scoreComp) {
//   console.log('You won somehow!');
// } else {
//   console.log('No winner, which means you still lost...');
// }
