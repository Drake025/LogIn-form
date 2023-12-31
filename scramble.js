const wordText = document.querySelector(".word"),
  hintText = document.querySelector(".hint span"),
  timeText = document.querySelector(".time b"),
  inputField = document.querySelector("input"),
  refreshBtn = document.querySelector(".refresh-word"),
  checkBtn = document.querySelector(".check-word");

let correctWord, timer, usedWords = [];

const initTimer = maxTime => {
  clearInterval(timer);
  timer = setInterval(() => {
      if (maxTime > 0) {
          maxTime--;
          return (timeText.innerText = maxTime);
      }
      alert(`Time off! ${correctWord.toUpperCase()} was the correct word`);
      initGame();
  }, 1000);
};

const initGame = () => {
  initTimer(30);
  let randomObj;
  if (usedWords.length === words.length) {
    alert("All words have been used! Click refresh button to start again");
      usedWords = [];
  } else {
      do {
          randomObj = words[Math.floor(Math.random() * words.length)];
      } while (usedWords.includes(randomObj.word));

      usedWords.push(randomObj.word);

      let wordArray = randomObj.word.split("");
      for (let i = wordArray.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
          [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
      }
      wordText.innerText = wordArray.join("");
      hintText.innerText = randomObj.hint;
      correctWord = randomObj.word.toLowerCase();
      inputField.value = "";
      inputField.setAttribute("maxlength", correctWord.length);
  }
};
initGame();

const checkWord = () => {
  let userWord = inputField.value.toLowerCase();
  if (!userWord) return alert("Please enter the word to check!");
  if (userWord !== correctWord)
      return alert(`Oops! ${userWord} is not a correct word`);
  alert(`Congrats! ${correctWord.toUpperCase()} is the correct word`);
  initGame();
};

refreshBtn.addEventListener("click", initGame);
checkBtn.addEventListener("click", checkWord);
inputField.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
      // Trigger the 'Check Word' by pressing the enter key in the keyboard
      checkWord();
  }
});
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
  
  const tryAgainBtn = document.querySelector(".try-again");
tryAgainBtn.addEventListener("click", () => {
  usedWords = []; // Reset used words
  initGame();
});
  
  
