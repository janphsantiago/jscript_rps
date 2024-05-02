    let playerSelection;
    let computerSelection;
    let playerScore = 0;
    let computerScore = 0;

/* FUNCTION FOR COMPUTER TO RANDOMLY CHOOSE */ 
    function getComputerChoice() {
        const pick = ['rock', 'paper', 'scissors'];
        return computerSelection = pick[Math.floor(Math.random() * pick.length)];
    }

    const rockBtn = document.querySelector('#rock');
    const paperBtn = document.querySelector('#paper');
    const scissorsBtn = document.querySelector('#scissors');
    const playAgain = document.querySelector('#restart');
    const playerCount = document.querySelector('.playerPts');
    const compCount = document.querySelector('.computerPts');

/* BUTTONS FOR PLAYER CHOICES */
    rockBtn.addEventListener("click", function () {
        playerSelection = "rock";
        playRound("rock"); 
    });
    
    paperBtn.addEventListener("click", function () {
         playerSelection = "paper";
         playRound("paper");
    });
    
    scissorsBtn.addEventListener("click", function () {
        playerSelection = "scissors";
        playRound("scissors");
    });
    
/* FUNCTION TO RETURN RESULTS OF THE MATCHES */
    function playChoice(playerSelection, computerSelection) {
    if (playerSelection === computerSelection){
        return "It's a tie!";
    }
    else if ((playerSelection === "#paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "rock" && computerSelection === "scissors"))
    {   playerScore += 1;
        return "Player wins!";
    }
    else{

        computerScore += 1;
        return "Computer wins!";
    }
}   

    function playRound(){
        getComputerChoice();
        let results = playChoice(playerSelection, computerSelection);
        console.log (results + " Player:" + playerSelection + " vs Computer:" + computerSelection);
        playerCount.textContent = "Player: " + playerScore;
        compCount.textContent = "Computer " + computerScore;
     
        if (playerScore == 5){
            alert('Player Wins!')
        }
        else if (computerScore == 5){
            alert('Computer Wins!')
        
        }
    }

    playAgain.addEventListener('click', function() {
        playerScore = 0;
        computerScore = 0;
        playerCount.textContent = "Player: " + playerScore;
        compCount.textContent = "Computer " + computerScore;
        rockBtn.disabled = false;
        paperBtn.disabled = false;
        scissorsBtn.disabled = false;
        playAgain.disabled = false;
        
    })

