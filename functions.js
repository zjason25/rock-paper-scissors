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
  console.log(`The bot played ${botChoice}`);
  console.log(`You played ${playerChoice}`);

  if (botChoice == playerChoice) {
    console.log("It's a tie");
  }
  else if (botChoice == "rock") {
    if (playerChoice == "paper") {
      console.log("You win this round");
      humanScore += 1;
    }
    else if (playerChoice == "scissors") {
      console.log("The bot wins this round");
      computerScore += 1;
    }
  }
  else if (botChoice == "paper") {
    if (playerChoice == "scissors") {
      console.log("You win this round");
      humanScore += 1;
    }
    else if (playerChoice == "rock") {
      console.log("The bot wins this round");
      computerScore += 1;
    }
  }
  else if (botChoice == "scissors") {
    if (playerChoice == "rock") {
      console.log("You win this round");
      humanScore += 1;
    }
    else if (playerChoice == "paper") {
      console.log("The bot wins this round");
      computerScore += 1;
    }
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
