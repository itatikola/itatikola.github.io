// changing the text on a page
// 'GET' method used to get a new text, JS used to dynamically change text to this text
// received by the server
/* document.getElementById("changeButton").addEventListener("click", function(event) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "/randomtext", true);
    xhr.responseType = 'text'; 

    xhr.onload = function () {
        console.log(xhr.response); 
    };

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById("text").innerHTML = xhr.response;
        }
    };
    xhr.send(); // initiator
}); */

/* doing the same thing with the fetch API 
async function changeText() {
    const response = await fetch('/randomtext'); 
    const text = await response.text(); 
    console.log(text);
    return text;
}

document.getElementById('changeButton').addEventListener('click', async function(event) {
    document.getElementById('text').innerHTML = await changeText(); 
})*/

// STARTER JS 

/*const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";

const button = document.getElementById('nextNameButton'); 

button.addEventListener('click', updateName); 

function updateName() {
    const name = prompt('Enter a new name');
    button.textContent = `Player 1: ${name}`;
}*/

// NUMBER GUESSING GAME

let randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector(".guessField");

// focus on guessField if NGG bubble is pressed
document.getElementById("experimentOne").addEventListener("click", () => {
  guessField.focus(); 
});

let guessCount = 1;
let resetButton;
function checkGuess() {
    const userGuess = Number(guessField.value);
    if (guessCount === 1) {
      guesses.textContent = "Previous guesses:";
    }
    guesses.textContent = `${guesses.textContent} ${userGuess}`;
  
    if (userGuess === randomNumber) {
      lastResult.textContent = "Congratulations! You got it right!";
      lastResult.style.backgroundColor = "green";
      lowOrHi.textContent = "";
      setGameOver();
    } else if (guessCount === 10) {
      lastResult.textContent = "!!!GAME OVER!!!";
      lowOrHi.textContent = "";
      setGameOver();
    } else {
      lastResult.textContent = "Wrong!";
      lastResult.style.backgroundColor = "red";
      if (userGuess < randomNumber) {
        lowOrHi.textContent = "Last guess was too low!";
      } else if (userGuess > randomNumber) {
        lowOrHi.textContent = "Last guess was too high!";
      }
    }
  
    guessCount++;
    guessField.value = "";
    guessField.focus();
}

guessSubmit.addEventListener("click", checkGuess);

function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement("button");
    resetButton.textContent = "Start new game";
    document.getElementById("experimentOne").append(resetButton);
    resetButton.addEventListener("click", resetGame);
}  

function resetGame() {
    guessCount = 1;
  
    const resetParas = document.querySelectorAll(".resultParas p");
    for (const resetPara of resetParas) {
      resetPara.textContent = "";
    }
  
    resetButton.parentNode.removeChild(resetButton);
  
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = "";
    guessField.focus();
  
    lastResult.style.backgroundColor = "white";
  
    randomNumber = Math.floor(Math.random() * 100) + 1;
}
  