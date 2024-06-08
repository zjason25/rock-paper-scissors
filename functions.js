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

function getHumanChoice() {
  let input = prompt("Enter your choice", "");
  let choice = input.toLowerCase();

  while (choice != "rock" && choice != "paper" && choice != "scissors") {
    input = prompt("Invalid choice. Try again", "");
    choice = input.toLowerCase();
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

function playGame() {
  let round = 1;
  while (round <= 5) {
    console.log(`[Round ${round}]\n`);
    playRound();
    round += 1;
  }
  if (humanScore == computerScore) {
    console.log("Tie game!");
  }
  else if (humanScore < computerScore) {
    console.log("The bot wins the game!");
  }
  else {
    console.log("You win the game!");
  }

  console.log("Good game, all :)");
}

let humanScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playRound(button.id);
  });
});

// playGame();
