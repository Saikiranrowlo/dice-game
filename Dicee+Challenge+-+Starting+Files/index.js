let randomNumber1 = Math.floor(Math.random() * 6) + 1; // Generate a random number between 1 and 6
let randomDiceImage1 = "images/dice" + randomNumber1 + ".png"; // Construct the image path

let randomNumber2 = Math.floor(Math.random() * 6) + 1; // Generate a random number between 1 and 6
let randomDiceImage2 = "images/dice" + randomNumber2 + ".png"; 

document.querySelector(".img1").setAttribute("src", randomDiceImage1); // Set the src attribute of the left <img>
document.querySelector(".img2").setAttribute("src", randomDiceImage2); // Set the src attribute of the left <img>

let heading = document.querySelector("h1");

// Update the text based on the dice roll results
if (randomNumber1 > randomNumber2) {
    heading.textContent = "🚩 Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
    heading.textContent = "Player 2 Wins! 🚩";
} else {
    heading.textContent = "It's a Draw! 🎲";
}