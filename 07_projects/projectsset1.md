# Projects related to DOM

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## project 1

```javascript
/* Target to achieve is that we click on any button, bg 
color should change accordingly, for that we've to apply event on  
those elements. */

// 1st, we've to select those elements (all 4 buttons)
const buttons = document.querySelectorAll('.button');

// 2nd, we've to select body to change its color
// const body = document.body
const body = document.querySelector('body');

// Here, whenever we perform the 'click' event, then that event
// can be taken into a function and we can do some activies with it.

buttons.forEach(function (button) {
  console.log(button);

  // apply event listener on each button
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target); // from where is the event coming

    // now access the color id of the target element
    // and change the body.bg color according to it

    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
  });
});


```


## project 2 solution

```javascript
/*
  1st, we'll extract the values out of the input through events
  2nd, we'll insert the result text in the results div
 */

/*
  Here, we'll have to select the entire form b/z it has the submit button
  (Calculate), so here we'll have a submit type of event rather than a click
  event.
 */

const form = document.querySelector('form');

/*
  We know a form gets submitted in 2 ways: 
  1. post type
  2. get type

  And when it gets submitted, then its values go to the url/server. So, we're 
  stopping that default form action for now, as we're not sending to the server
  side.
*/

// const height = parseInt(form.querySelector('#height').value)
/* trying to extract the value before the event is wrong, as we
   want to take the value at the time we're clicking submit, i.e. after
   submitting the values, so writing it outside would mean as soon as the page loads,
   the script would load, and the empty value would be stored in the 
   height */

form.addEventListener('submit', function (e) {
  // prevent the default action of the 'submit' event stored in e
  e.preventDefault();

  // collect the height, weight input values using their id
  // these values will be returned as strings, so parse them into int
  const height = parseInt(form.querySelector('#height').value);
  const weight = parseInt(form.querySelector('#weight').value);

  // select the <div id="result">
  const results = form.querySelector('#results');

  // ensure safety checks whether height & weight can be parsed
  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;

  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
    
  } else {
    // If both height & weight are proper, calculate bmi
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    let category;
    if (bmi < 18.6) {
      category = 'Under Weight';
    } else if (bmi >= 18.6 && bmi < 24.9) {
      category = 'Normal Range';
    } else {
      category = 'Overweight';
    }

    // Now show this bmi on the results
    results.innerHTML = `<span>${bmi}<br>${category}</span>`;
  }
});


```


## project 3 solution

```javascript 
// 1st, select the clock to display the time

// const clock = document.querySelector('#clock')
const clock = document.getElementById('clock');


/* 
  Now, we've to display a digital clock, so it has to change every sec.
*/

// let date = new Date()
// console.log(date.toLocaleTimeString())

/* The issue with the code below is that the time displays on the console
   not the webpage, and everytime we refresh the page, then only the time 
   updates. But the timer has to update automatically and forever keep on 
   running without the need to refresh everytime. 
   
   Now, such a method exists in javascript that runs at every moment, or 
   maybe after certain interval of time, say 2-3s.
   
   There is a method setInterval() method which controls the events in JS.
   Just give it a method, and a interval after which it will continuously
   go on running that method till the program ends/till the script gets 
   over. */


// Now, the time will be printed on the console after every 1 sec
setInterval(function () {
  let date = new Date()
  // console.log(date.toLocaleTimeString())

  /* Now, rather than printing on the console, we have to update 
     the node (of the clock div) of the document every sec */
  clock.innerHTML = date.toLocaleTimeString()

}, 1000) // time is in milli-sec



```

## project 4 solution

```javascript
/*
  1. Input a number and submit it, evaluate it whether it's correct or wrong
  2. Keep storing the previous guesses (in array) and display it to the
     user 
  3. After every submit-click, decrement the guesses remaining.
  4. Game over when attempts left = 0
*/

// 1st task: generate a random no. from 1 to 100 (both inclusive)
let randomNumber = parseInt(Math.random() * 100 + 1);

// 2nd task: select the submit button as this is where our events will
// occur, so we've to use a event listener on it
const submit = document.querySelector('#subt');

// 3rd task: take user input from the guessField input
const userInput = document.querySelector('#guessField');

// Similarly, store previous guesses and guesses remaining
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');

const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

// to insert some values, create a <p>
const p = document.createElement('p');

/* This will be an empty array to store the prev values submitted by the user and display the entire array to the user so that they don't guess 
the same value again */
let prevGuess = [];

// to count his no. of attempts, once it reaches = 10, disable the submit
// button
let numGuess = 1;

// To allow us to play the game
/* There is always such a variable while designing games, like suppose
   our events are over, or coins are finished, then without checking
   this variable the game does not proceed any further */
let playGame = true;

// check if we can play the game
if(playGame) {
  // add event listener on the submit button
  submit.addEventListener('click', function (e) {
    e.preventDefault()
    const guess = userInput.value // take the value from the input field
    console.log(guess)
    validateGuess(guess) // pass it to the next function for validation
  })
}

function validateGuess(guess) {
  // to validate the input guess
  if(isNaN(guess)) {
    alert('Please enter a valid number')
  } else if(guess < 1) {
    alert('Please enter a number more than 1')
  } else if(guess > 100) {
    alert('Please enter a number less than 100')
  } else {
    // if no. is valid, push it into the prevGuess arr
    prevGuess.push(guess)

    // check if no attempts left
    if(numGuess === 11) {
      displayGuess(guess)
      displayMessage(`Game over. Random number was ${randomNumber}`)
      endGame()
    } else {
      displayGuess(guess)
      checkGuess(guess)
    }
  }
}

function checkGuess(guess) {
  // to print the message whether correct or low or high
  if(guess === randomNumber) {
    displayMessage(`You guessed it right`)
    endGame()
  } else if(guess < randomNumber) {
    displayMessage(`Number is too low`)
  } else if(guess > randomNumber) {
    displayMessage(`Number is too high`)
  }
}

function displayGuess(guess) {
  // all the dom manipulation occurs here
  // it will clean the value, to take the next input value
  userInput.value = ''
  
  // updates the guess slot from the prevGuess array
  guessSlot.innerHTML += `${guess}, `
  // update the numGuess, i.e. attempts left
  numGuess++
  remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage(message) {
  // all the dom manipulation occurs here
  lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame() {
  // to end the current game

  /* To end the game, a button must be pressed */
  userInput.value = '' // clean the input value
  
  // user must not be able to input any more value
  userInput.setAttribute('disabled', '')

  p.classList.add('button') // now the p behaves as a button
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`

  startOver.appendChild(p) // adds the new game button in the resultParas div
  playGame = false
  newGame()
}

function newGame() {
  // to start a new game
  const newGameButton = document.querySelector('#newGame')
  newGameButton.addEventListener('click', function(e) {
    // here all we need to do is just reset the variables
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = []
    numGuess = 1
    guessSlot.innerHTML = ''
    remaining.innerHTML = `${11 - numGuess}`
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)

    playGame = true // before allowing the user to play again, resut all variables first
  })
}




```