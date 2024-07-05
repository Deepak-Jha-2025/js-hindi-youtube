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