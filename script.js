
let randomNumber;
let attempts = 0;

function initializeGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById('fedback').textContent = '';
    document.getElementById('attempts').textContent = 'Attempts: 0';
    document.getElementById('guess-input').value = '';
}

function submitGuess() {
    const userGuess = parseInt(document.getElementById('guess-input').value);
    const fedback = document.getElementById('fedback');

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        fedback.textContent = 'Please enter a valid number between 1 and 100.';
        fedback.style.color = 'red';
        return;
    }

    attempts++;
    document.getElementById('attempts').textContent = `Attempts: ${attempts}`;

    if (userGuess === randomNumber) {
        fedback.textContent = `Congratulations! You guessed the correct number in ${attempts} attempts!`;
        fedback.style.color = 'green';
    } else if (userGuess > randomNumber) {
        fedback.textContent = 'Too high! Try again.';
        fedback.style.color = 'orange';
    } else {
        fedback.textContent = 'Too low! Try again.';
        fedback.style.color = 'orange';
    }
}

document.getElementById('submit-btn').addEventListener('click', submitGuess);
document.getElementById('restart-btn').addEventListener('click', initializeGame);

window.onload = initializeGame;
