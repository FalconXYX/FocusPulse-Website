const words = ["Time Managment", "Productivity", "Efficiency"];
let currentWordIndex = 0;

function updateWord() {
  const wordElement = document.getElementById("highlightedWord");

  // Slide out the current word (downwards)
  wordElement.classList.add("slide-out");

  setTimeout(() => {
    // Update the word after sliding out
    currentWordIndex = (currentWordIndex + 1) % words.length;
    wordElement.textContent = words[currentWordIndex];

    // Reset the position for the new word to slide in from the top
    wordElement.classList.remove("slide-out");
    wordElement.classList.add("slide-in");

    // Remove the slide-in class after the animation finishes
    setTimeout(() => {
      wordElement.classList.remove("slide-in");
    }, 500); // Matches the transition duration
  }, 500); // Wait for the slide-out transition to finish
}

// Initialize with the first word
document.getElementById("highlightedWord").textContent =
  words[currentWordIndex];

// Change the word every 3 seconds
setInterval(updateWord, 3000);
