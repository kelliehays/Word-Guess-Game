

 // Create an array of words
 let words = [
 "pineapple",
 "coconut",
 "lanai",
 "palm",
 "ocean",
 "aloha",
 "mahalo",
 "kona",
 ];

 // Pick a random word
 let word = words[Math.floor(Math.random() * words.length)];
 let guessedLetters = [];
 let letterToGuess = null;
 let guessLeft = 9;
 let wins = 0;
 let losses = 0;
 const updateGuessLeft - () => {
     document.querySelector("#guess-left").innerHTML = guessLeft;
 }

 const updateGuessesSoFar - () => {
     document.querySelector("#guesses-so-far").innerHTML = guessedLetters.join(",");

 }

const reset = () => {
     guessLeft = 9;
     guessedletters = {};
     updateLetterToGuess();
     updateGuessLeft();
     updateGuessesSoFar();
}

 // Set up the answer array. This is the 1st for loop. 
 let answerArray = [];
 for (var i = 0; i < word.length; i++) {
 answerArray[i] = "_";
 }
 let remainingLetters = word.length;

 // The game loop
 while (remainingLetters > 0);
 (guessLeft > 0)
 {

 // Show the player their progress
 alert(answerArray.join(" "));

 // Get a guess from the player
 let guess = prompt("Guess a letter, or click Cancel to end playing");
 if (guess === null) {

 // Exit the game loop
 break;
 } else if (guess.length !== 1) {
 alert("Please enter a single letter.");
 } else {

 // Update the game state with the guess.  (i has already been used, so now we'll use j)
 for (var j = 0; j < word.length; j++) {
 if (word[j] === guess) {
 answerArray[j] = guess;
 remainingLetters--;
 }
 }
 }
// The end of the game loop
 }
 // Reveal the answer and congratulate the player
 alert(answerArray.join(" "));
 alert("Good job! The word is " + word);
