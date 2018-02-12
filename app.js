
document.querySelector("h1").addEventListener("click", game);

function game() {

  let playerScore = 0;
  let computerScore = 0;
  let draw = 0;

  /**
  * This generates a move from the CPU
  * @return {string} the CPU's choice
  */
  function computerPlay() {
    var number = Math.floor(Math.random() * 3) + 1;

    if (number === 1) {
      return "rock";
    } else if ( number === 2) {
      return "paper";
    } else {
      return "scissors";
    }
  };

  /**
  * This is the main function which takes 2 string values and compares them.
  * @param {string} player
  * @param {string} computer
  */
  function playRound(player, computer) {

    // I want to see what the comp chose (for debugging)
    console.log(`computer chose ${computer}`);

    if (player === "rock" && computer === "paper") {
      console.log("You Lose! Paper beats Rock");
      computerScore++;

    } else if (player === "rock" && computer === "scissors") {
      console.log("You Win! Rock beats Scissors");
      playerScore++;

    } else if (player === computer) {
      console.log("Draw!");
      draw++;

    } else if (player === "paper" && computer === "rock" ) {
      console.log("You Win! Paper beats Rock");
      playerScore++;

    } else if (player === "paper" && computer === "scissors") {
      console.log("You Lose! Scissors beats Paper");
      computerScore++;

    } else if (player === "scissors" && computer === "rock") {
      console.log("You Lose! Rock beats Scissors");
      computerScore++;

    } else if (player === "scissors" && computer === "paper") {
      console.log("You Win! Scissors beats Paper");
      playerScore++;

    }
  };

  let gameCount = 0;

  while(gameCount < 5) {
    const player = prompt('Type Rock, Paper or Scissors').toLowerCase();

    const computer = computerPlay();
    playRound(player, computer);
    gameCount++

    console.log("player score = " + playerScore);
    console.log("computer score = " + computerScore);
    console.log("draws " + draw);
    console.log("game round " + gameCount + '\n');
  };

  console.log("player score = " + playerScore);
  console.log("computer score = " + computerScore);
  console.log("draws " + draw);
  console.log("game round " + gameCount + '\n');
};
