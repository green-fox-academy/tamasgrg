// - Gather 10.000 candies!
// - Clicking the ‘Create candies’ button gives you 1 candy.
// - You can buy a lollipop for 100 candies by clicking the ‘Buy lollipop’ button.
// - 10 lollipops generate 1 candy per second.
//   - Use the 🍭 emoji to display the lollipops you have
// - Display the candy producton rate in the `Candies / Second` row
// - If you press the "make candy rain" button, the candy generation should speed up 10x


// need to implement end-game logic, generating-speed and setIntervals aren't working really good

'use strict';

const buttons = document.getElementsByTagName('button');
const candies = document.querySelector('.candies');
const lollypops = document.querySelector('.lollypops');
const speed = document.querySelector('.speed');
let interval = 1000;
let generating = false;

buttons[0].addEventListener('click', () => candies.textContent++);
buttons[1].addEventListener('click', () => {
  // if (candies.textContent >= 100) {
    candies.textContent -= 100;
    lollypops.textContent += "🍭";
    generate();
  // }
});
buttons[2].addEventListener('click', () => {
  if (generating === true) {
    speed.textContent *= 10;
    interval *= 0.1;
    fastInterval();
  }
});

let setUpInterval = setInterval(() => {
  if (lollypops.textContent.length >= 20) increaseCandy();
}, interval);

function fastInterval() {
  clearInterval(setUpInterval);
  setInterval(() => increaseCandy(), interval);
}

function generate() {
  if (lollypops.textContent.length >= 20 && generating === false) {
    speed.textContent++;
    generating = true;
  }
}

function increaseCandy() {
  if (candies.textContent > 9999) {
    clearInterval(fastInterval);
    alert('You won!');
  }
  candies.textContent++;
}