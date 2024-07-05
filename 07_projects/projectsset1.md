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