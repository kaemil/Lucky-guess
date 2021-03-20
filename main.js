// Variables //

let randomNumber = Math.floor(Math.random() * 10 + 1);
let guessField = document.querySelector('.container__guessField');
let guessSubmit = document.querySelector('.container__guessSubmit');
let resultParas = document.querySelectorAll('.container__resultParas p');
let resultUser = document.querySelector('.container__resultUser');
let resultMessage = document.querySelector('.container__resultMessage');
let container = document.querySelector('.container');
let resetButton;

// Interactive elements //

guessField.focus()
guessSubmit.addEventListener('click', checkGuess);
guessField.addEventListener('keydown', function (event) {
    if (event.keyCode === 13) {
        checkGuess();
    }
});

// Functions //

function checkGuess() {
    let userGuess = Number(guessField.value);
    if (userGuess >= 1 && userGuess <= 10) {
        resultUser.textContent = `Your number: ${userGuess}`
        if (randomNumber === userGuess) {
            resultMessage.innerHTML = `The number was ${randomNumber}.<br> You should try quick pick!`
            container.classList.add('container--win');
        } else {
            resultMessage.textContent = `The number was ${randomNumber}. Not this time. `
            container.classList.add('container--lose');
        };
        guessField.value = '';
        gameOver();
    } else {
        alert('Enter number from 1-10');
        guessField.value = '';
    }
};

function gameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button')
    resetButton.textContent = 'Try again';
    resetButton.classList.add('container__resetButton');
    container.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
}

function resetGame() {
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.focus()
    for (i = 0; i < resultParas.length; i++) {
        resultParas[i].textContent = ''
    }
    randomNumber = Math.floor(Math.random() * 10 + 1);
    resetButton.remove(resetButton);
    container.className = 'container';
};