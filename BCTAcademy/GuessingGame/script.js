let randomNumber;
let attempts;

function startGame() {
  randomNumber = Math.floor(Math.random() * 30) + 1;
  attempts = 3;
  document.getElementById("guessInput").value = "";
  document.getElementById("feedback").innerText = "";
  document.getElementById("playAgain").style.display = "none";
  console.log(randomNumber);
}

function makeGuess() {
  const userGuess = parseInt(document.getElementById("guessInput").value);
  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    document.getElementById("feedback").innerText =
      "Please enter a valid number between 1 and 100.";
    return;
  }

  attempts--;

  if (userGuess === randomNumber) {
    document.getElementById(
      "feedback"
    ).innerText = `Congratulations! 🎉 You guessed the number!`;
    document.getElementById("playAgain").style.display = "block";
  } else if (attempts === 0) {
    document.getElementById(
      "feedback"
    ).innerText = `Game Over! 😢 The number was ${randomNumber}.`;
    document.getElementById("playAgain").style.display = "block";
  } else {
    const hint = userGuess > randomNumber ? "lower" : "higher";
    document.getElementById(
      "feedback"
    ).innerText = `Wrong guess! Try a ${hint} number. You have ${attempts} attempts left.`;
  }
}

// Initialize the game when the page loads
window.onload = startGame;
