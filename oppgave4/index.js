const desc = document.getElementById("desc");
const guessUl = document.getElementById("guess");
const numbersUl = document.getElementById("numbers");
const button = document.querySelector("button");

const numbers = [1, 6, 3, 10, 16];

const displayNumbers = (numbers) => {
  for (const number of numbers) {
    const listItem = document.createElement("li");
    listItem.innerHTML = Number(number);
    numbersUl.appendChild(listItem);
  }
};


const addInputUI = (numbers) => {
    for (const x of numbers) {
      const listItem = document.createElement("li");
      const inputfield = document.createElement("input");
      inputfield.type = "text";
      listItem.appendChild(inputfield);
      guessUl.appendChild(listItem);
    }
  };


const getGuess = () => {
    guesses = guessUl.querySelectorAll("input");
    return [...guesses].map((val, index) => {
        return {key: index, value: val.value};
    });
};

const checkNumberSeq = () => {
    let values = [];
    for (let key of getGuess()) {
        values.push(key.value);
    }
    numArray = numbers.sort((a, b) => a - b); // https://stackoverflow.com/questions/1063007/how-to-sort-an-array-of-integers-correctly
    const isCorrect = numArray.join("") === values.join("") ? alert("Du sorterte riktig!") : alert("Feil sortering prøv igjen!!!");
};



const createUI = () => {
  displayNumbers(numbers);
  addInputUI(numbers);


};

createUI();

button.addEventListener("click", checkNumberSeq);
