let humanScore = 0;
let compScore = 0;

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

function getHumanChoice() {
	const choices = ['rock', 'paper', 'scissors'];
	while (true) {
		let choice = prompt(
			'Please provide your choice: rock, paper, or scissors'
		).toLowerCase();
		if (choices.includes(choice)) {
			return choice;
		} else {
			alert('Please provide a valid choice of: rock, paper, or scissors');
		}
	}
}

function playRound(computerChoice, humanChoice) {
	if (computerChoice === humanChoice) {
		console.log(`You both chose ${humanChoice}. No one wins.`);
		alert('Tie!');
		return;
	}

	if (computerChoice === 'rock' && humanChoice === 'paper') {
		console.log('Human wins');
		alert('You won this round!');
		humanScore += 1;
	} else if (computerChoice === 'paper' && humanChoice === 'scissors') {
		console.log('Human wins');
		alert('You won this round!');
		humanScore += 1;
	} else if (computerChoice === 'scissors' && humanChoice === 'rock') {
		console.log('Human wins');
		alert('You won this round!');
		humanScore += 1;
	} else {
		console.log('Computer wins!');
		alert('The computer won this round!');
		compScore += 1;
	}
}

function setScore() {
	document.querySelector('.human').innerHTML = `Human Score: ${humanScore}`;
	document.querySelector(
		'.computer'
	).innerHTML = `Computer Score: ${compScore}`;
}

function playGame() {
	for (let i = 0; i < 5; i++) {
		let compChoice = getComputerChoice();
		let humanChoice = getHumanChoice();

		console.log(`Computer choice: ${compChoice}`);
		console.log(`Human choice: ${humanChoice}`);

		playRound(compChoice, humanChoice);
	}

	setScore();
	console.log('===== Final Scores ======');
	console.log(`Computer: ${compScore}`);
	console.log(`Human   : ${humanScore}`);
}

playGame();
