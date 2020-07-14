'use strict';

const button = document.querySelector('button');

const countElements = () => {
  const liList = document.querySelectorAll('li');
  const result = document.querySelector('p');
  result.innerHTML = liList.length;
};

button.addEventListener('click', countElements);
