
document.querySelector("h1").addEventListener("click", game);

function game() {

  let playerScore = 0;
  let computerScore = 0;
  let draw = 0;

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

  function playRound(player, computer) {

    if (player === "rock" && computer === "paper") {
      console.log("You Lose! Paper beats Rock");
      computerScore++;

    } else if (player === "rock" && computer === "scissors") {
      console.log("You Win! Rock beats Scissors");
      playerScore++;

    } else if (player === "rock" && computer === "rock") {
      console.log("Draw!");
      draw++;

    } else if (player === "paper" && computer === "rock" ) {
      console.log("You Win! Paper beats Rock");
      playerScore++;

    } else if (player === "paper" && computer === "scissors") {
      console.log("You Lose! Scissors beats Paper");
      computerScore++;

    } else if (player === "paper" && computer === "paper") {
      console.log("Draw!");
      draw++;

    } else if (player === "scissors" && computer === "rock") {
      console.log("You Lose! Rock beats Scissors");
      computerScore++;

    } else if (player === "scissors" && computer === "paper") {
      console.log("You Win! Scissors beats Paper");
      playerScore++;

    } else if (player === "scissors" && computer === "scissors") {
      console.log("Draw!");
      draw++;
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
    console.log("game round " + gameCount);
  };

  console.log("player score = " + playerScore);
  console.log("computer score = " + computerScore);
  console.log("draws " + draw);
  console.log("game round " + gameCount);
};
