'use strict';

const nav = document.querySelector('nav');
const img = document.querySelector('div');
let imgSize = parseInt(window.getComputedStyle(img).backgroundSize);
let imgPosX = parseInt(window.getComputedStyle(img).backgroundPositionX);
let imgPosY = parseInt(window.getComputedStyle(img).backgroundPositionY);

const navigate = (event) => {
  if (event.target.dataset.action === "move") {
    switch (event.target.dataset.direction) {
      case 'up':
        imgPosY -= 10;
        img.style.backgroundPositionY = `${imgPosY}%`;
        break;
      case 'down':
        imgPosY += 10;
        img.style.backgroundPositionY = `${imgPosY}%`;
        break;
      case 'left':
        imgPosX -= 10;
        img.style.backgroundPositionX = `${imgPosX}%`;
        break;
      case 'right':
        imgPosX += 10;
        img.style.backgroundPositionX = `${imgPosX}%`;
        break;
    }
  }
};

const zoom = (event) => {
  if (event.target.dataset.action === "zoom") {
    if (event.target.dataset.direction === "in") {
      imgSize += 20;
      img.style.backgroundSize = `${imgSize}%`;
    } else if (event.target.dataset.direction === "out") {
      imgSize -= 20;
      img.style.backgroundSize = `${imgSize}%`;
    }
  }
};

nav.addEventListener('click', navigate);
nav.addEventListener('click', zoom);