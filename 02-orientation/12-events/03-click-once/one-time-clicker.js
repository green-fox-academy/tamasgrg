'use strict';

const button = document.querySelector('button');

const logTimestamp = () => {
  console.log(Date.now());
  button.removeEventListener('click', logTimestamp);
  // button.setAttribute('disabled', true);
};

button.addEventListener('click', logTimestamp);
