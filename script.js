'use strict';

//Geenerates a random number which is to be compared with the guess number
let secretNumber = Math.trunc(Math.random() * 20) + 1;


let score = 20;

let highScore = 0;
//Add event listener to the check button that grabs a value from the input field whenever its clicked 
document.querySelector(".check").addEventListener("click", function () {
    const guess = Number(document.querySelector(".guess").value);
    if (!guess) {
        document.querySelector(".message").textContent = "⛔ No Number";
    }else if (guess === secretNumber) {
        document.querySelector(".message").textContent = "🎉 Correct Number";
        document.querySelector(".number").textContent = secretNumber;
        document.querySelector(".number").style.width = '30rem';
        document.querySelector("body").style.backgroundColor = '#60b347';
        if (score > highScore) {
            highScore = score;
            document.querySelector(".highscore").textContent = highScore;
        }

    }else if (guess > secretNumber) {
        if (score > 1) {
            document.querySelector(".message").textContent = "📈 too high";
            score--;
            document.querySelector(".score").textContent = score;
            console.log(score);
        }else {
            document.querySelector(".message").textContent = "💥 You've lost the game";
            document.querySelector(".score").textContent = 0;
        }

        
    }else if (guess < secretNumber) {
        if (score > 1) {
            document.querySelector(".message").textContent = "📈 too low";
            score--;
            document.querySelector(".score").textContent = score;
            console.log(score);
        }else {
            document.querySelector(".message").textContent = "💥 You've lost the game";
            document.querySelector(".score").textContent = score;
        }
    }
});

document.querySelector(".again").addEventListener('click', function () {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    //Restores the initial score value
    score = 20;
    document.querySelector(".score").textContent = score;
    //Restores the initial msg 
    document.querySelector(".message").textContent = "Start Guessing...";
    document.querySelector(".number").textContent = "?";
    document.querySelector(".guess").value = ' ';
    document.querySelector(".number").style.width = '15rem';
    document.querySelector("body").style.backgroundColor = '#222';

})