document.getElementById('rock').addEventListener('click', function() {
  playerChoice('rock');
});

document.getElementById('paper').addEventListener('click', function() {
  playerChoice('paper');
});

document.getElementById('scissors').addEventListener('click', function() {
  playerChoice('scissors');
});

function playerChoice(choice) {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  const computerChoice = choices[randomIndex];

  const result = determineWinner(choice, computerChoice);
  displayResult(result, choice, computerChoice);
};

function determineWinner(player, computer) {
  if (player === computer) {
    return 'Det blev oavgjort!';
  } else if (
    (player === 'rock' && computer === 'scissors') ||
    (player === 'scissors' && computer === 'paper') ||
    (player === 'paper' && computer === 'rock')
  ) {
    return 'Du vann!';
  } else {
    return 'Datorn vann!';
  }
};

function displayResult(result, player, computer) {
  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = `${result}<br>Du valde ${player}, datorn valde ${computer}`;
};















// Hämta mina variablar
const rock = document.getElementById('rock');
const scissors = document.getElementById('scissors');
const paper = document.getElementById('paper');

// Skapa en function som ger dig nummer 1 till 3 som står för sten, sax, påse.




