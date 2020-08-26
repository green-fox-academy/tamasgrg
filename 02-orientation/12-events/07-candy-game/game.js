// - Gather 10.000 candies!
// - Clicking the ‘Create candies’ button gives you 1 candy.
// - You can buy a lollipop for 100 candies by clicking the ‘Buy lollipop’ button.
// - 10 lollipops generate 1 candy per second.
//   - Use the 🍭 emoji to display the lollipops you have
// - Display the candy producton rate in the `Candies / Second` row
// - If you press the "make candy rain" button, the candy generation should speed up 10x

'use strict';

const buttons = document.getElementsByTagName('button');
const candies = document.querySelector('.candies');
const lollypops = document.querySelector('.lollypops');
const speed = document.querySelector('.speed');

buttons[0].addEventListener('click', () => candies.textContent++);
buttons[1].addEventListener('click', () => {
  // if (candies.textContent >= 100) {
    candies.textContent -= 100;
    lollypops.textContent += "🍭";
  // }
});