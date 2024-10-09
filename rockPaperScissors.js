let humanScore = 0;
let compScore = 0;
let roundCount = 0;

const paperBtn = document.querySelector('.paper');
const rockBtn = document.querySelector('.rock');
const scissorsBtn = document.querySelector('.scissors');
const scoreDiv = document.querySelector('.score');
const human = document.querySelector('.human');
const computer = document.querySelector('.computer');
const buttons = document.querySelector('.buttons');
const round = document.querySelector('.round');

paperBtn.addEventListener('click', () => playRound('paper'));
rockBtn.addEventListener('click', () => playRound('rock'));
scissorsBtn.addEventListener('click', () => playRound('scissors'));

// Return a random number between 0-2 that will be used as computers choice
function getComputerChoice() {
	const choice = Math.floor(Math.random() * 3);
	switch (choice) {
		case 0:
			return 'rock';
		case 1:
			return 'paper';
		case 2:
			return 'scissors';
	}
}

// Show the choices from the previous round
function showRound(computerChoice, humanChoice) {
	const rHeader = document.createElement('h2');
	const cChoice = document.createElement('p');
	const hChoice = document.createElement('p');
	roundCount++;

	rHeader.textContent = `Round ${roundCount}`;
	cChoice.textContent = `Computer Choice: ${computerChoice}`;
	hChoice.textContent = `Human Choice: ${humanChoice}`;

	round.appendChild(rHeader);
	round.appendChild(cChoice);
	round.appendChild(hChoice);
}

// Add play again option to DOM
function playAgain() {
	const playAgain = document.createElement('button');
	playAgain.textContent = 'Play Again';
	playAgain.addEventListener('click', () => {
		clearRound();
		resetGame();
		buttons.removeChild(playAgain);
		scoreDiv.removeChild(document.querySelector('.winner'));
	});
	buttons.appendChild(playAgain);
}

// Check if the game is over and announce the winner
function gameOverCheck() {
	if (compScore < 5 && humanScore < 5) {
		return;
	}

	const winner = document.createElement('h2');
	winner.classList.add('winner');

	if (compScore === 5) {
		winner.textContent = 'Computer Wins!';
		scoreDiv.appendChild(winner);
		playAgain();
	} else if (humanScore === 5) {
		winner.textContent = 'Human Wins!';
		scoreDiv.appendChild(winner);
		playAgain();
	}
}

// Resent scores and update DOM
function resetGame() {
	humanScore = 0;
	compScore = 0;
	roundCount = 0;
	updateScore();
}

// Update scores
function updateScore() {
	human.innerText = `Human Score: ${humanScore}`;
	computer.innerText = `Computer Score: ${compScore}`;
}

// Clear round section
function clearRound() {
	round.textContent = '';
}

function playRound(humanChoice) {
	if (humanScore === 5 || compScore === 5) {
		alert('Click play again or refresh to start a new round');
		return;
	}

	clearRound();
	const computerChoice = getComputerChoice();

	if (computerChoice === humanChoice) {
		console.log(`You both chose ${humanChoice}. No one wins.`);
	} else if (computerChoice === 'rock' && humanChoice === 'paper') {
		console.log('Human wins');
		humanScore += 1;
	} else if (computerChoice === 'paper' && humanChoice === 'scissors') {
		console.log('Human wins');
		humanScore += 1;
	} else if (computerChoice === 'scissors' && humanChoice === 'rock') {
		console.log('Human wins');
		humanScore += 1;
	} else {
		console.log('Computer wins!');
		compScore += 1;
	}

	showRound(computerChoice, humanChoice);
	updateScore();
	gameOverCheck();
}
