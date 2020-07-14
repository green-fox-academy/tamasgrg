'use strict';

window.onkeyup = function(event) {
  const h1 = document.querySelector('h1');
  h1.innerHTML = 'Last pressed key code is: ' + event.keyCode;
}