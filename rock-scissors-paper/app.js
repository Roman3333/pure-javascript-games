const test = () => {
  const computerChoiceDisplay = document.getElementById('computer-choice');
  const userChoiceDisplay = document.getElementById('user-choice');
  const resultDisplay = document.getElementById('result');
  const possibleChoices = document.querySelectorAll('button');
  let userChoice;
  let computerChoice;
  let result;

  possibleChoices.forEach((item) => {
    item.addEventListener('click', (e) => {
      userChoice = e.target.id;
      userChoiceDisplay.innerHTML = userChoice;
      generateComputerChoice();
      getResult();
    });
  });

  function generateComputerChoice() {
    let computerRandom = Math.floor(Math.random() * 3 + 1);

    if (computerRandom === 1) {
      computerChoice = 'rock';
    }
    if (computerRandom === 2) {
      computerChoice = 'scissors';
    }
    if (computerRandom === 3) {
      computerChoice = 'paper';
    }

    computerChoiceDisplay.innerHTML = computerChoice;
  }

  const getResult = () => {
    if (computerChoice === userChoice) {
      result = 'its a draw!';
    }
    if (computerChoice === 'rock' && userChoice === 'paper') {
      result = 'you win!';
    }
    if (computerChoice === 'rock' && userChoice === 'scissors') {
      result = 'you lost!';
    }
    if (computerChoice === 'paper' && userChoice === 'scissors') {
      result = 'you win!';
    }
    if (computerChoice === 'paper' && userChoice === 'rock') {
      result = 'you lose!';
    }
    if (computerChoice === 'scissors' && userChoice === 'rock') {
      result = 'you win!';
    }
    if (computerChoice === 'scissors' && userChoice === 'paper') {
      result = 'you lose!';
    }

    resultDisplay.innerHTML = result;
  };
};

test();
