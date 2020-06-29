    var secret = Math.floor(Math.random() * 10) + 1;


    document.getElementById("button").addEventListener("click", askAgain);

    function askAgain() { // Convert the string guess to an integer so that we can compare    
        var guess = parseInt(prompt("Please guess a number between 1 and 10"));
        game(guess);
    }

    function game(guessAnswer) {
        while (guessAnswer != null) {
            if (guessAnswer == secret) {
                alert("You've guessed correct! The correct number is " + secret);
            } else if (guessAnswer < secret) {
                alert("Sorry, the number is too low!");
                askAgain();
            } else if (guessAnswer > secret) {
                alert("Sorry, the number is too high!");
                askAgain();
            } else {
                alert("Invalid input! Try again.");
                askAgain();
            }
        }
    }