const inputs = document.querySelector(".inputs"),
  hintTag = document.querySelector(".hint span"),
  guessLeft = document.querySelector(".guess-left span"),
  wrongLetter = document.querySelector(".wrong-letter span"),
  resetBtn = document.querySelector(".reset-btn");
  typingInput = document.querySelector(".typing-input");

let word, maxGuesses, incorrectLetters = [], correctLetters = [];
let usedWords = [];
let completedWords = 0;

function randomWord() {
  let availableWords = wordList.filter(item => !usedWords.includes(item.word));

  if (availableWords.length === 0) {
    alert("You've completed all the words!");
    newGameBtn.style.display = "block";
    return;
  }

  let ranItem = availableWords[Math.floor(Math.random() * availableWords.length)];
  word = ranItem.word;
  maxGuesses = word.length >= 5 ? 8 : 6;
  correctLetters = [];
  incorrectLetters = [];
  hintTag.innerText = ranItem.hint;
  guessLeft.innerText = maxGuesses;
  wrongLetter.innerText = incorrectLetters;

  let html = "";
  for (let i = 0; i < word.length; i++) {
    html += `<input type="text" disabled>`;
    inputs.innerHTML = html;
  }

  usedWords.push(word);
}

function initGame(e) {
     let key = e.target.value.toLowerCase();
    if(key.match(/^[A-Za-z]+$/) && !incorrectLetters.includes(` ${key}`) && !correctLetters.includes(key)) {
        if(word.includes(key)) {
            for (let i = 0; i < word.length; i++) {
                if(word[i] == key) {
                    correctLetters += key;
                    inputs.querySelectorAll("input")[i].value = key;
                }
            }
        } else {
            maxGuesses--;
            incorrectLetters.push(` ${key}`);
        }
        guessLeft.innerText = maxGuesses;
        wrongLetter.innerText = incorrectLetters;
    }
    typingInput.value = "";

    setTimeout(() => {
        if(correctLetters.length === word.length) {
            alert(`Congrats! You found the word ${word.toUpperCase()}`);
            return randomWord();
        } else if(maxGuesses < 1) {
            alert("Game over! You don't have remaining guesses");
            for(let i = 0; i < word.length; i++) {
                inputs.querySelectorAll("input")[i].value = word[i];
            }
        }
    }, 100);
}


function endGame() {
  completedWords++;
  if (completedWords === wordList.length) {
    alert("You've completed all the words!");
  
  } else {
    randomWord();
  }
}

function resetGame() {
  completedWords = 0;
  usedWords = [];
  correctLetters = [];
  incorrectLetters = [];
  typingInput.value = "";

  randomWord();
}


resetBtn.addEventListener("click", resetGame);

typingInput.addEventListener("input", initGame);
inputs.addEventListener("click", () => typingInput.focus());
document.addEventListener("keydown", () => typingInput.focus());

randomWord();

function toggleDropdown() {
  var dropdown = document.getElementById("myDropdown");
  dropdown.style.display = (dropdown.style.display === "block") ? "none" : "block";
}

function toggleGameDropdown() {
  var dropdown = document.getElementById("gameDropdown");
  dropdown.style.display = (dropdown.style.display === "block") ? "none" : "block";
}

// Close the dropdown menus if the user clicks outside of them
window.onclick = function(event) {
  var dropdown = document.getElementById("myDropdown");
  if (!event.target.matches('.dropbtn')) {
    if (dropdown.style.display === "block") {
      dropdown.style.display = "none";
    }
  }

  var gameDropdown = document.getElementById("gameDropdown");
  if (!event.target.matches('.gamedrop')) {
    if (gameDropdown.style.display === "block") {
      gameDropdown.style.display = "none";
    }
  }
};

function toggleDropdown() {
  var dropdown = document.getElementById("myDropdown");
  dropdown.style.display = (dropdown.style.display === "block") ? "none" : "block";
}

function toggleGameDropdown() {
  var dropdown = document.getElementById("gameDropdown");
  dropdown.style.display = (dropdown.style.display === "block") ? "none" : "block";
}

// Close the dropdown menus if the user clicks outside of them
window.onclick = function(event) {
  var dropdown = document.getElementById("myDropdown");
  if (!event.target.matches('.dropbtn')) {
    if (dropdown.style.display === "block") {
      dropdown.style.display = "none";
    }
  }

  var gameDropdown = document.getElementById("gameDropdown");
  if (!event.target.matches('.gamedrop')) {
    if (gameDropdown.style.display === "block") {
      gameDropdown.style.display = "none";
    }
  }
}

