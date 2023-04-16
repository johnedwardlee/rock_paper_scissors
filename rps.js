CHOICES = ['rock', 'paper', 'scissors'];
const NUMBER_OF_GAMES = 5;

let getComputerChoice = function () {
  return CHOICES[Math.floor(Math.random() * CHOICES.length)];
};

let playRound = function (compChoice, playerChoice) {
  console.log(playerChoice);
  console.log(compChoice);
  if (typeof playerChoice == 'string')
    playerChoice = playerChoice.toLowerCase();
  else {
    alert(
      'You have to input something to play the game.\nRefresh to try agian at being competent...'
    );
    return ['bad', 'Try Again'];
  }

  if (!CHOICES.includes(playerChoice)) {
    alert(
      'You had only three options and you typed none of them.\nRefresh to try agian at being competent... '
    );
    return ['bad', 'Try Again'];
  }

  if (playerChoice == compChoice) {
    return ['draw', "It's a draw, you both chose " + playerChoice];
  } else if (playerChoice == 'rock') {
    if (compChoice == 'scissors')
      return ['player', 'You win, ' + playerChoice + ' beats ' + compChoice];
    else if (compChoice == 'paper')
      return ['computer', 'You lose ' + compChoice + ' beats ' + playerChoice];
  } else if (playerChoice == 'paper') {
    if (compChoice == 'rock')
      return ['player', 'You win, ' + playerChoice + ' beats ' + compChoice];
    else if (compChoice == 'scissors')
      return ['computer', 'You lose ' + compChoice + ' beats ' + playerChoice];
  } else if (playerChoice == 'scissors') {
    if (compChoice == 'paper')
      return ['player', 'You win, ' + playerChoice + ' beats ' + compChoice];
    else if (compChoice == 'rock')
      return ['computer', 'You lose ' + compChoice + ' beats ' + playerChoice];
  } else return ['bad', 'You really goofed something up...'];
};

let scorePlayer = 0;
let scoreComputer = 0;
for (let i = 0; i < 5; ++i) {
  let playerChoiceInput = prompt(
    'Choose your weapon:\nRock, Paper, or Scissors'
  );
  let result = playRound(getComputerChoice(), playerChoiceInput);
  console.log(result[0]);

  if (result[0] == 'player') scorePlayer++;
  else if (result[0] == 'computer') scoreComputer++;

  console.log(
    `${result[1]}\nThe Score is now:\nYou: ${scorePlayer}\nComputer: ${scoreComputer}`
  );
  if (scorePlayer > NUMBER_OF_GAMES / 2) {
    console.log('You won somehow!');
    break;
  }
  if (scoreComputer > NUMBER_OF_GAMES / 2) {
    console.log('You lost, as expected...');
    break;
  }
}
