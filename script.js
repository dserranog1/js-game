console.log("Hello!");
const resultsCounter = {
  playerWins: 0,
  computerWins: 0,
  ties: 0,
};

function getRandomInt(min, max) {
  // e.g. min = 0 and max = 3
  // 0,3 * max = 0,9 + min = 0,9 -- rounded down = 0
  return Math.floor(Math.random() * max) + min;
}

function displayResults() {
  console.log(
    `Player wins: ${resultsCounter.playerWins} \nComputer wins: ${resultsCounter.computerWins} \nTies: ${resultsCounter.ties}`
  );
}

function capitalizeFirstLetter(givenString) {
  return givenString[0].toUpperCase() + givenString.slice(1);
}

function askUserForInput() {
  let validInputs = ["rock", "paper", "scissors", "exit"];
  let input = prompt(
    "Type in your play: rock, paper scissors or type 'exit' to end the game"
  );
  while (true) {
    if (!input || !validInputs.includes(input.toLowerCase())) {
      input = prompt("Oops! Invalid or no option, please enter a valid one!");
    } else {
      return input.toLowerCase();
    }
  }
}

function game() {
  let playerSelection = askUserForInput();
  for (let i = 0; i < 4; i++) {
    if (playerSelection === "exit") {
      console.log("Exiting.. thanks for playing! Here are the results:");
      displayResults();
      return;
    }
    console.log(
      `Round ${i + 1}: ${playRound(playerSelection, computerPlay())}`
    );
    playerSelection = askUserForInput();
  }
  console.log(`Last round!: ${playRound(playerSelection, computerPlay())}`);
  console.log("Thanks for playing! Here are the results!");
  displayResults();
}

function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection === "rock" && computerSelection == "scissors") ||
    (playerSelection === "paper" && computerSelection == "rock") ||
    (playerSelection === "scissors" && computerSelection == "paper")
  ) {
    resultsCounter.playerWins++;
    return `You win! ${capitalizeFirstLetter(
      playerSelection
    )} beats ${capitalizeFirstLetter(computerSelection)}`;
  } else if (
    (playerSelection === "scissors" && computerSelection == "rock") ||
    (playerSelection === "rock" && computerSelection == "paper") ||
    (playerSelection === "paper" && computerSelection == "scissors")
  ) {
    resultsCounter.computerWins++;
    return `Computer wins! ${capitalizeFirstLetter(
      computerSelection
    )} beats ${capitalizeFirstLetter(playerSelection)}`;
  } else {
    resultsCounter.ties++;
    return "It's a tie!";
  }
}

function computerPlay() {
  const options = ["rock", "paper", "scissors"];
  return options[getRandomInt(0, 3)];
}

game();
