const guessLeft = document.getElementById("guessLeft");
const guessList = document.getElementById("guessList");
const guessBtn = document.getElementById("guessBtn");
const beginBtn = document.getElementById("beginBtn");
let guessInput = document.getElementById("input");
let startNumber;
let guessNumber = 5;


// Startar spelet!
beginBtn.addEventListener('click', function(){
  startNumber = Math.floor(Math.random() * 101);
  console.log(startNumber);
  // visa hur många chanser jag har kvar
  guessList.textContent  = '';
  guessNumber = 5;
  guessLeft.textContent =`Du har ${guessNumber} gisningar kvar`;
  guessBtn.disabled = false;
});



// Funktion som visar vad du gissar och hur många gissninar du har kvar
guessBtn.addEventListener('click', function(){
  let userGuess = guessInput.value;
  console.log(startNumber);
 if (userGuess > startNumber) {
    guessNumber --;
    guessLeft.textContent = `Du har ${guessNumber} gissningar kvar!`;
    const listItem = document.createElement("li");
    listItem.textContent = `${userGuess} är tyvärr för högt försök igen!`;
    guessList.appendChild(listItem);
    // userGuess.textContent = '';
    // beginBtn.textContent = (`Spela igen!`);
  } else if (userGuess == startNumber) {
    guessNumber --;
    guessLeft.textContent = `Du har ${guessNumber} gissningar kvar!`;
    const listItem = document.createElement("li");
    listItem.textContent = `${userGuess} det är korrekt snyggt jobbat, hämta ditt pris i receptionen!!`;
    guessList.appendChild(listItem);
    guessBtn.disabled = true;
    beginBtn.textContent = (`Spela igen!`);
    guessLeft.textContent = (`GRATTIS!!! Du vann, hämta kakan i baren och du får ett glas mjölk till!`);
  } else{
    guessNumber --;
    guessLeft.textContent = `Du har ${guessNumber} gissningar kvar!`;
    const listItem = document.createElement("li");
    listItem.textContent = `${userGuess} är tyvärr för lågt testa igen`;
    guessList.appendChild(listItem);
  }

  if (guessNumber == 0){
    guessLeft.textContent = ("Tyvärr har du inga gissnignar kvar det korrekta svaret var " + startNumber);
    beginBtn.textContent = (`Spela igen!`);
  }

  
 
  if (guessNumber < 0){
  window.location.reload();
}

});



