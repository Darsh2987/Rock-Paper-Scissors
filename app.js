
document.querySelector("h2").addEventListener("click", game);

function game() {

  let playerScore = 0;
  let computerScore = 0;
  let draw = 0;
  let gameCount = 0;

  /**
  * This generates a move from the CPU
  * @return {string} the CPU's choice
  */
  function computerSelection() {
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

    console.log(`computer chose ${computer}`);
    console.log(`player chose ${player}`);

    switch(true) {
      case player === "rock" && computer === "paper":
        console.log("You Lose! Paper beats Rock");
        computerScore++;
        break;
      case player === "rock" && computer === "scissors":
        console.log("You Win! Rock beats Scissors");
        playerScore++;
        break;
      case player === "paper" && computer === "rock":
        console.log("You Win! Paper beats Rock");
        playerScore++;
        break;
      case player === "paper" && computer === "scissors":
        console.log("You Lose! Scissors beats Paper");
        computerScore++;
        break;
      case player === "scissors" && computer === "rock":
        console.log("You Lose! Rock beats Scissors");
        computerScore++;
        break;
      case player === "scissors" && computer === "paper":
        console.log("You Win! Scissors beats Paper");
        playerScore++;
        break;
      case player === computer:
        console.log("Draw!");
        draw++;
    }
  };

  // Player Selection function with validation if player input is not either rock, paper or scissors.
  function playerSelection() {
    const selection = prompt('Type Rock, Paper or Scissors').toLowerCase();

    if (selection !== 'rock' && selection !== 'paper' && selection !== 'scissors') {
        console.log('Invalid selection, please type either "Rock", "Paper", or "Scissors"');
        playerSelection();
      } else {
      return selection;
    };
  };



  // While loop to play 5 round of the game.
  while(gameCount < 5) {
    const player = playerSelection();
    const computer = computerSelection();
    playRound(player, computer);
    gameCount++

    console.log("player score = " + playerScore);
    console.log("computer score = " + computerScore);
    console.log("draws " + draw);
    console.log("game round " + gameCount + '\n');
  };
  console.log("total player score = " + playerScore);
  console.log("total computer score = " + computerScore);
  console.log("total draws " + draw);
  console.log("total game round " + gameCount + '\n');
};
