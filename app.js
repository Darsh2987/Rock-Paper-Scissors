
document.querySelector(".play").addEventListener("click", game);

function game() {

  // Setting game scores and round.
  let playerScore = 0;
  let computerScore = 0;
  let draw = 0;
  let gameCount = 1;

  // Creates the Section element with UL elements inside and appends to body.
  const section = document.createElement("section");
  section.className = "result-section"
  document.body.appendChild(section);

  const roundResults = document.createElement("ul");
  roundResults.className = "round-results";
  section.appendChild(roundResults);

  // Player Selection function with validation if player input is not either rock, paper or scissors.
  function pSelection() {
    const selection = prompt('Type Rock, Paper or Scissors').toLowerCase();

    if (selection !== 'rock' && selection !== 'paper' && selection !== 'scissors') {
        console.log('Invalid selection, please type either "Rock", "Paper", or "Scissors"');
        pSelection();
      } else {
      return selection;
    };
  };

  /**
  * This generates a move from the CPU
  * @return {string} the CPU's choice
  */
  function cSelection() {
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
  * Function also displays the results of each game round.
  * @param {string} player
  * @param {string} computer
  */
  function playRound(playerSelection, computerSelection) {

    const roundOutcomeLi = document.createElement("li");

    switch(true) {
      case playerSelection === "rock" && computerSelection === "paper":
        console.log("You Lose! Paper beats Rock");
        roundOutcomeLi.textContent = "You Lose this round! Paper beats Rock";
        computerScore++;
        break;
      case playerSelection === "rock" && computerSelection === "scissors":
        console.log("You Win! Rock beats Scissors");
        roundOutcomeLi.textContent = "You Win this round! Rock beats Scissors";
        playerScore++;
        break;
      case playerSelection === "paper" && computerSelection === "rock":
        console.log("You Win! Paper beats Rock");
        roundOutcomeLi.textContent = "You Win this round! Paper beats Rock";
        playerScore++;
        break;
      case playerSelection === "paper" && computerSelection === "scissors":
        console.log("You Lose! Scissors beats Paper");
        roundOutcomeLi.textContent = "You Lose this round! Scissors beats Paper";
        computerScore++;
        break;
      case playerSelection === "scissors" && computerSelection === "rock":
        console.log("You Lose! Rock beats Scissors");
        roundOutcomeLi.textContent = "You Lose this round! Rock beats Scissors";
        computerScore++;
        break;
      case playerSelection === "scissors" && computerSelection === "paper":
        console.log("You Win! Scissors beats Paper");
        roundOutcomeLi.textContent = "You Win this round! Scissors beats Paper";
        playerScore++;
        break;
      case playerSelection === computerSelection:
        console.log("Draw!");
        roundOutcomeLi.textContent = "You both chose the same item, it's a tie";
        draw++;
    }

    const gameRound = document.createElement("ul");
    gameRound.className = "gameRound";
    roundResults.appendChild(gameRound);

    const roundNum = `Game round ${gameCount}`;
    const roundNumLi = document.createElement("li");
    roundNumLi.className = "game-round";
    roundNumLi.textContent = roundNum;
    gameRound.appendChild(roundNumLi);

    const playerChoice = `You chose ${playerSelection}`;
    const playerLi = document.createElement("li");
    playerLi.className = "Players-choice";
    playerLi.textContent = playerChoice;
    gameRound.appendChild(playerLi);

    const computerChoice = `The computer chose ${computerSelection}`;
    const computerLi = document.createElement("li");
    computerLi.className = "computers-choice";
    computerLi.textContent = computerChoice;
    gameRound.appendChild(computerLi);

    roundOutcomeLi.className = "round-outcome";
    gameRound.appendChild(roundOutcomeLi);

    const player_Score = `Your score = ${playerScore}`;
    const player_ScoreLi = document.createElement("li");
    player_ScoreLi.className = "players-score";
    player_ScoreLi.textContent = player_Score;
    gameRound.appendChild(player_ScoreLi);

    const computer_Score = `The computer Score = ${computerScore}`;
    const computer_ScoreLi = document.createElement("li");
    computer_ScoreLi.className = "computers-score";
    computer_ScoreLi.textContent = computer_Score;
    gameRound.appendChild(computer_ScoreLi)

    const draw_Score = `Draws = ${draw}`;
    const draw_ScoreLi = document.createElement("li");
    draw_ScoreLi.className = "draw";
    draw_ScoreLi.textContent = draw_Score;
    gameRound.appendChild(draw_ScoreLi);
  };

  // Function to display total results at the end of the 5 rounds.
  function totalResults() {

    const totalResults = document.createElement("ul");
    totalResults.className = "total-results";
    section.appendChild(totalResults);

    const totalPlayerScore = `Your total score ${playerScore}`;
    const totalPlayerScoreLi = document.createElement("li");
    totalPlayerScoreLi.className = "total-player-score";
    totalPlayerScoreLi.textContent = totalPlayerScore;
    totalResults.appendChild(totalPlayerScoreLi);

    const totalComputerScore = `Computers total score ${computerScore}`;
    const totalComputerScoreLi = document.createElement("li");
    totalComputerScoreLi.className = "total-computer-score";
    totalComputerScoreLi.textContent = totalComputerScore;
    totalResults.appendChild(totalComputerScoreLi);

    const totalDraws = `Total draws ${draw}`;
    const totalDrawsLi = document.createElement("li");
    totalDrawsLi.className = "total-draws";
    totalDrawsLi.textContent = totalDraws;
    totalResults.appendChild(totalDrawsLi);
  };

  // Function to display end game result wherever the player or computer has won or lost.
  function endResult() {
    const endResult = document.createElement("h2");
    endResult.className = "end-result";
    section.appendChild(endResult);

    if (playerScore < computerScore) {
      endResult.textContent = "You lose, better luck next time!";
    } else if (playerScore > computerScore) {
      endResult.textContent = "You win, Congratualations!";
    } else {
      endResult.textContent = "It's a tie, no one wins!"
    }
  };

  // While loop to play 5 round of the game.
  while(gameCount < 6) {
    const playerSelection = pSelection();
    const computerSelection = cSelection();
    playRound(playerSelection, computerSelection);
    gameCount++
  };

  totalResults();
  endResult();
};
