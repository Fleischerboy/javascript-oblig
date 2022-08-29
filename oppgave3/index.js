let wordCounter = 0;
let positionCounter = 0;
let wrongCounter = 0;
const wordId = document.getElementById("word");
const letterId = document.getElementById("letter");
const wrongs = document.getElementById("wrongs");
const userInput = document.getElementById("userInput");
const startBtn = document.getElementById("startBtn");

const pTags = document.querySelectorAll("p");

const wordList = ["car", "snow", "iphone", "work", "javascript", "hello"];


const clearLetters = () => {
    letterId.innerHTML = "";
  };

function setWord() {
   if(wordList[wordCounter]) {
    return wordId.innerHTML = wordList[wordCounter];
   }
   return wordId.innerHTML = `<h1>No more words :(`;
}


function changeWord() {
  positionCounter = 0;
  wordCounter = wordCounter + 1;
  setWord();
}

const checkPosition = (word, position, letter) => {
  if([...word][position] === letter) {
    return true;
  }
  return false;
};

const wordIsCorrect = (word, positionCounter) => {
  if (positionCounter === word.length) {
    return true;
  }
  return false;
};

const handleKeyUp = ({ key }) => {
  const word = wordList[wordCounter];
  if (checkPosition(word, positionCounter, key)) {
        positionCounter++;
    if (wordIsCorrect(word, positionCounter)) {
       changeWord();
    }
  } else {
    wrongCounter++;
  }
  updateUI(key);
};

const updateUI = (key) => {
  if(wordList[wordCounter]) {
    wrongs.innerHTML = wrongCounter;
    letter.innerHTML = key;
    wordId.innerHTML = `<span class="green">${wordList[wordCounter].slice(
        0,
        positionCounter,
      )}</span>${wordList[wordCounter].slice(positionCounter)}`;
  }
};

window.addEventListener("keyup", handleKeyUp);
startBtn.addEventListener("click", (event) => {
  startBtn.disabled = true;
  setWord();
});
