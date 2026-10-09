let secretNumber = 7;
let guess = 0;

while (guess != secretNumber) {
    guess = Number(prompt("Guess the number:"));

    if (guess > secretNumber) {
        alert("Too high! Try again.");
    } else if (guess < secretNumber) {
        alert("Too low! Try again.");
    }
}

alert("Correct! The number was " + secretNumber);