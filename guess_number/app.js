// Game values
let min = 1,
  max = 10,
  winningNum = getRandomNum(min, max),
  guessesLeft = 3;

// UI Elements
const game = document.querySelector('#game'),
  minNum = document.querySelector('.min-num'),
  maxNum = document.querySelector('.max-num'),
  guessBtn = document.querySelector('#guess-btn'),
  guessInput = document.querySelector('#guess-input'),
  message = document.querySelector('.message');

// Assign UI
minNum.textContent = min;
maxNum.textContent = max;

// Play again event listener
game.addEventListener('mousedown', function(e) {
  guessInput.disabled = false;
  if (e.target.className === 'play-again') {
    window.location.reload();
  }
});

guessBtn.addEventListener('click', function() {
  console.log(guessInput.value, ' is value');
  guessInput.disabled = false;
  let guess = parseInt(guessInput.value);

  // Validate input
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
  }

  // Check if won
  if (guess === winningNum) {
    gameOver(true, `${winningNum} is correct! You WIN!`);
  } else {
    // wrong number
    guessesLeft -= 1;

    // Check guess left
    if (guessesLeft === 0) {
      // Game over - lost
      gameOver(
        false,
        `Game over, you lost.  The correct number was ${winningNum}`
      );
    } else {
      // Game continues

      // Change boarder color
      guessInput.style.borderColor = 'red';

      // Clear Input
      guessInput.value = '';

      // Tell user its the wrong number
      setMessage(`${guess} is not correct, ${guessesLeft} guesses left`);
    }
  }
});

// Game over
function gameOver(won, msg) {
  let color;
  won === true ? (color = 'green') : (color = 'red');
  // Disable input button
  guessInput.disabled = true;

  // change border color
  guessInput.style.borderColor = color;

  // Set text color
  message.style.color = color;

  // Send a message
  setMessage(msg);

  // Play again?
  guessBtn.value = 'Play Again';
  guessBtn.className += 'play-again';
}

// Get Winning Number
function getRandomNum(min, max) {
  // generates num between one and ten
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}
