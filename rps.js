// GLOBALS
CHOICES = ['rock', 'paper', 'scissors'];
const NUMBER_OF_GAMES = 5;
let scorePlayer = 0;
let scoreComp = 0;
let gameCounter = 0;

// FUNCTIONS
function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  this.classList.remove('clicked');
}

function getComputerChoice() {
  return CHOICES[Math.floor(Math.random() * CHOICES.length)];
}

function roundResult(result, msg) {
  if (result == 'player') {
    scorePlayer++;
    playerScoreDisp.textContent = `Player: ${scorePlayer}`;
  } else if (result == 'computer') {
    scoreComp++;
    compScoreDisp.textContent = `Computer: ${scoreComp}`;
  }
  gameCount.textContent = `Game Count: ${gameCounter}`;
  message.textContent = `  ${msg}`;
}

function resetGame(e) {
  gameCounter = 0;
  scorePlayer = 0;
  scoreComp = 0;
  playerScoreDisp.textContent = `Player: ${scorePlayer}`;
  compScoreDisp.textContent = `Computer: ${scoreComp}`;
  gameCount.textContent = `Game Count: ${gameCounter}`;

  const removeGameOver = document.getElementsByClassName('game-over');
  removeGameOver[0].remove();
}

function playRound(e) {
  let playerChoice = this.classList[0];
  const choice = document.querySelector(`.${playerChoice}`);
  choice.classList.add('clicked');
  const compChoice = getComputerChoice();

  gameCounter++;
  if (gameCounter > NUMBER_OF_GAMES) return;
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

  if (gameCounter == NUMBER_OF_GAMES) {
    const gameOver = document.createElement('div');
    gameOver.classList.add('game-over');
    let gameOverMsg;
    if (scorePlayer > scoreComp)
      gameOverMsg = "You won, maybe you aren't as incompetent as I thought...";
    else if (scoreComp > scorePlayer)
      gameOverMsg =
        'I figured you would lose. Did you actually think you had a chance?';
    else gameOverMsg = 'Draws are not wins, so you are still a loser';
    const gameOverTextNode = document.createTextNode(gameOverMsg);
    gameOver.appendChild(gameOverTextNode);
    const bottomOfPage = document.getElementById('message');
    document.body.insertBefore(gameOver, bottomOfPage.nextSibling);
  }
}

// MAIN
const choiceButtons = document.querySelectorAll('.choice');
choiceButtons.forEach((choice) => choice.addEventListener('click', playRound));
choiceButtons.forEach((choice) =>
  choice.addEventListener('transitionend', removeTransition)
);
const message = document.querySelector('.wl-msg');
const gameCount = document.querySelector('.game-count');
const playerScoreDisp = document.querySelector('.player-score');
const compScoreDisp = document.querySelector('.comp-score');
playerScoreDisp.textContent = `Player: ${scorePlayer}`;
compScoreDisp.textContent = `Computer: ${scoreComp}`;
gameCount.textContent = `Game Count: ${gameCounter}`;
const resetButton = document.querySelector('.reset-btn');
resetButton.addEventListener('click', resetGame);
