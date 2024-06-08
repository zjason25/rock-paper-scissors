function getComputerChoice() {
  let res = Math.random();
  let choice;
  if (res < 0.3) {
    choice = "rock";
  }
  else if (res < 0.6) {
    choice = "paper";
  }
  else {
    choice = "scissors";
  }
  return choice;
}

function playRound(playerChoice) {
  let botChoice = getComputerChoice();
  const res = document.querySelector("#results");
  const player = document.querySelector("#human");
  const computer = document.querySelector("#computer");
  const score = document.querySelector("#scores");
  score.textContent = `You: ${humanScore}. Bot: ${computerScore}`;
  player.textContent = `You played ${playerChoice}`;
  computer.textContent = `Bot player ${botChoice}`;


  if (botChoice == playerChoice) {
    res.textContent = "It's a tie";
  }
  else if (botChoice == "rock") {
    if (playerChoice == "paper") {
      res.textContent = "You win this round";
      humanScore += 1;
    }
    else if (playerChoice == "scissors") {
      res.textContent = "The bot wins this round";
      computerScore += 1;
    }
  }
  else if (botChoice == "paper") {
    if (playerChoice == "scissors") {
      res.textContent = "You win this round";
      humanScore += 1;
    }
    else if (playerChoice == "rock") {
      res.textContent = "The bot wins this round";
      computerScore += 1;
    }
  }
  else if (botChoice == "scissors") {
    if (playerChoice == "rock") {
      res.textContent = "You win this round";
      humanScore += 1;
    }
    else if (playerChoice == "paper") {
      res.textContent = "The bot wins this round";
      computerScore += 1;
    }
  }

  if (humanScore == 5) {
    res.textContent = "You win the game!";
  }
  else if (computerScore == 5) {
    res.textContent = "Bot wins the game.";
  }
}

let humanScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playRound(button.id);
  });
});
